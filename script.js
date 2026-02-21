// CONFIG
const CORS_PROXY = "https://corsproxy.io/?";
const STEAM_SEARCH_URL = "https://store.steampowered.com/search/results/?filter=topsellers&count=100&json=1";
const STEAM_DETAILS_URL = "https://store.steampowered.com/api/appdetails";
const DEFAULT_IMAGE = "https://via.placeholder.com/1920x1080?text=Game+Image";

// STATE
let games = [];
let filteredGames = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const isOfflineMode = true; // Always true now

// DOM ELEMENTS
const gamesGrid = document.getElementById("games");
const loader = document.getElementById("loader");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartItemsList = document.getElementById("cartItems");
const totalSizeEl = document.getElementById("totalSize");
const totalCountEl = document.getElementById("totalCount");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const osFilterSelect = document.getElementById("osFilter");
const statusBar = document.getElementById("status-bar");
const progressBar = document.getElementById("progressBar");
const statusText = document.getElementById("statusText");

// INIT
document.addEventListener("DOMContentLoaded", () => {
  loadGames();
  updateCartUI();
  
  document.getElementById("refreshBtn").onclick = () => {
    localStorage.removeItem("steam_games_cache_v2");
    loadGames();
  };
});

// --- CORE LOGIC ---

async function loadGames() {
  gamesGrid.innerHTML = "";
  showLoader(true);
  statusBar.classList.add("hidden");
  games = [];

  await loadOfflineGames();
}

async function loadOfflineGames() {
  try {
    // offlineGamesList is defined in offline_data.js
    if (typeof offlineGamesList === 'undefined') {
      throw new Error("Offline games list not found.");
    }

    console.log("Loading offline games list...", offlineGamesList);

    games = offlineGamesList.map((item, index) => {
      return {
        id: item.appid,
        name: item.name,
        image: item.image || getHighResImage(item.appid),
        rank: index + 1,
        release_date: "Loading...",
        release_timestamp: 0,
        platforms: { windows: true, mac: false, linux: false }, // Will be updated via API
        storageGB: item.storageGB || 0,
        storageDisplay: item.storageGB ? `${item.storageGB} GB` : "Checking...",
        detailsLoaded: false,
        notes: item.notes || "",
        description: item.description || "", // Custom description
        offlinePlayable: true
      };
    });

    applyFilters();
    showLoader(false);
    
    // Fetch details to fill in release dates and verify storage
    hydrateMissingDetails();
    
  } catch (err) {
    console.error(err);
    gamesGrid.innerHTML = `<p class="error">Failed to load offline games. <br> ${err.message}</p>`;
    showLoader(false);
  }
}

async function loadPopularGames() {
  const cached = localStorage.getItem("steam_games_cache_v2");
  const now = Date.now();

  if (cached) {
    const { timestamp, data } = JSON.parse(cached);
    // Expire after 24 hours
    if (now - timestamp < 24 * 60 * 60 * 1000) {
      games = data;
      applyFilters();
      hydrateMissingDetails();
      return;
    }
  }

  // Fetch fresh
  await fetchTopGames();
}

async function fetchTopGames() {
  try {
    const res = await fetch(CORS_PROXY + encodeURIComponent(STEAM_SEARCH_URL));
    if (!res.ok) throw new Error("Failed to fetch top games");
    const data = await res.json();

    games = data.items.map((item, index) => {
      const idMatch = item.logo.match(/\/apps\/(\d+)\//);
      const id = idMatch ? idMatch[1] : null;

      return {
        id: id,
        name: item.name,
        image: getHighResImage(id), // Use High Res
        rank: index + 1,
        release_date: "Loading...",
        release_timestamp: 0,
        platforms: { windows: true, mac: false, linux: false },
        storageGB: 0,
        storageDisplay: "Checking...",
        detailsLoaded: false,
        offlinePlayable: false // Assumed false until checked (though we can't easily check via API)
      };
    }).filter(g => g.id);

    saveCache();
    applyFilters();
    showLoader(false);
    hydrateMissingDetails();

  } catch (err) {
    console.error(err);
    gamesGrid.innerHTML = `<p class="error">Failed to load games. <br> ${err.message}</p>`;
    showLoader(false);
  }
}

function getHighResImage(appid) {
  if (!appid) return "https://via.placeholder.com/616x353?text=No+Image";
  const isNumeric = /^\d+$/.test(String(appid));
  if (!isNumeric) return DEFAULT_IMAGE;
  return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`;
}

// --- HYDRATION (DETAILS FETCHING) ---

async function hydrateMissingDetails() {
  const missing = games.filter(g => !g.detailsLoaded);
  if (missing.length === 0) return;

  statusBar.classList.remove("hidden");
  updateProgress(0, missing.length);

  const BATCH_SIZE = 10;
  const DELAY_MS = 1100;

  for (let i = 0; i < missing.length; i += BATCH_SIZE) {
    const batch = missing.slice(i, i + BATCH_SIZE);
    const ids = batch.map(g => g.id);
    
    await fetchBatchDetails(ids);
    
    updateProgress(i + BATCH_SIZE, missing.length);
    applyFilters();
    
    if (i + BATCH_SIZE < missing.length) {
      await new Promise(r => setTimeout(r, DELAY_MS));
    }
  }

  statusBar.classList.add("hidden");
}

async function fetchBatchDetails(ids) {
  try {
    const numericIds = ids.filter(id => /^\d+$/.test(String(id)));
    const idsParam = numericIds.join(",");
    if (!idsParam) {
      // Mark non-numeric IDs as processed
      ids.forEach(id => {
        const gameIndex = games.findIndex(g => g.id == id);
        if (gameIndex !== -1) {
          games[gameIndex].detailsLoaded = true;
          if (games[gameIndex].release_date === "Loading...") games[gameIndex].release_date = "Unknown";
          if (games[gameIndex].storageDisplay === "Checking...") games[gameIndex].storageDisplay = "Unknown Size";
          if (!games[gameIndex].description) games[gameIndex].description = games[gameIndex].notes || "Description not available.";
          if (!games[gameIndex].pc_requirements) games[gameIndex].pc_requirements = { minimum: "Not specified", recommended: "Not specified" };
        }
      });
      return;
    }
    const url = `${STEAM_DETAILS_URL}?appids=${idsParam}&filters=basic,platforms,pc_requirements,release_date`;
    
    console.log(`Fetching details for batch: ${idsParam}`);
    const res = await fetch(CORS_PROXY + encodeURIComponent(url));
    const data = await res.json();

    ids.forEach(id => {
      const gameIndex = games.findIndex(g => g.id == id);
      if (gameIndex === -1) return;

      if (data[id] && data[id].success) {
        const info = data[id].data;
        const fetchedStorage = parseStorage(info.pc_requirements);
        
        // Update game data
        // Priority: Local JSON > Steam API > Fallback
        
        let finalStorage = games[gameIndex].storageGB;
        // Only use fetched storage if local storage is missing/zero
        if (!finalStorage && fetchedStorage > 0) finalStorage = fetchedStorage;
        
        // If still 0 and no manual data, remains 0 (handled in display)

        games[gameIndex] = {
          ...games[gameIndex],
          release_date: info.release_date?.date || "Unknown",
          release_timestamp: new Date(info.release_date?.date || 0).getTime(),
          platforms: info.platforms || { windows: true, mac: false, linux: false },
          storageGB: finalStorage,
          storageDisplay: finalStorage > 0 ? `${finalStorage} GB` : (games[gameIndex].storageDisplay || "Unknown Size"),
          short_description: info.short_description || "",
          description: games[gameIndex].description || info.short_description || "", // Use custom description if exists
          pc_requirements: info.pc_requirements || { minimum: "Not available", recommended: "Not available" },
          detailsLoaded: true
        };
        
        console.log(`Updated ${games[gameIndex].name}: Storage=${finalStorage}GB, Date=${games[gameIndex].release_date}`);
      } else {
        // Failed to load details
        console.warn(`Failed to load details for ${id}`);
        games[gameIndex].detailsLoaded = true; // Mark as processed to avoid infinite loop
        if (games[gameIndex].release_date === "Loading...") games[gameIndex].release_date = "Unknown";
        if (games[gameIndex].storageDisplay === "Checking...") games[gameIndex].storageDisplay = "Unknown Size";
      }
    });

  } catch (err) {
    console.error("Batch fetch error:", err);
  }
}

function updateProgress(current, total) {
  const percent = Math.min(100, Math.round((current / total) * 100));
  progressBar.style.width = `${percent}%`;
  statusText.innerText = `Updating details: ${current}/${total} (Storage, Dates, Requirements)`;
}

function saveCache() {
  localStorage.setItem("steam_games_cache_v2", JSON.stringify({
    timestamp: Date.now(),
    data: games
  }));
}

// --- PARSING ---

function parseStorage(requirements) {
  if (!requirements) return 0;
  
  let text = "";
  if (typeof requirements === 'string') text = requirements;
  else if (requirements.minimum) text = requirements.minimum;
  else if (requirements.recommended) text = requirements.recommended;
  
  // Regex to capture "X GB/MB"
  // Handles: "Storage: 50 GB available space", "Hard Drive: 20 GB", etc.
  const regex = /(?:Storage|Hard Drive|Space|Disk).*?(\d+(\.\d+)?)\s*(GB|MB)/i;
  const match = text.match(regex);

  if (match) {
    let size = parseFloat(match[1]);
    const unit = match[3].toUpperCase();
    if (unit === "MB") size = size / 1024;
    return parseFloat(size.toFixed(2));
  }
  
  return 0;
}

// --- RENDERING ---

function renderGames(list) {
  gamesGrid.innerHTML = "";
  
  if (list.length === 0) {
    gamesGrid.innerHTML = "<p>No games found matching criteria.</p>";
    return;
  }

  list.forEach(game => {
    const inCart = cart.some(g => g.id === game.id);
    const osIcons = getOSIcons(game.platforms);
    const rankHtml = isOfflineMode ? '' : `<div class="rank-badge">#${game.rank}</div>`;
    const notesHtml = game.notes ? `<div class="card-note"><i class="fa-solid fa-circle-info"></i> ${game.notes}</div>` : '';
    const descHtml = game.description 
      ? `<p class="card-desc" title="${game.description}">${game.description}</p>` 
      : `<p class="card-desc" style="color:var(--text-secondary); font-style:italic;">No description available.</p>`;
    
    // Storage Category Logic
    let storageClass = "";
    let storageLabel = "";
    const size = game.storageGB || 0;
    if (size > 0) {
      if (size < 10) {
        storageClass = "storage-light";
        storageLabel = "Light";
      } else if (size < 50) {
        storageClass = "storage-medium";
        storageLabel = "Medium";
      } else {
        storageClass = "storage-heavy";
        storageLabel = "Heavy";
      }
    }
    const storageBadgeHtml = storageLabel ? `<div class="storage-badge ${storageClass}">${storageLabel}</div>` : '';

    // Date Logic (Hide if unknown)
    const dateHtml = (game.release_date && game.release_date !== "Unknown" && game.release_date !== "Loading...") 
      ? `<span><i class="fa-regular fa-calendar"></i> ${game.release_date}</span>` 
      : ``;

    const imgSrc = game.image || DEFAULT_IMAGE;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${rankHtml}
      <div class="img-container">
        ${storageBadgeHtml}
        <img src="${imgSrc}" 
             srcset="${imgSrc} 1x, ${imgSrc} 2x"
             class="card-img" 
             alt="${game.name}" 
             loading="lazy">
      </div>
      <div class="card-body">
        <h3 class="card-title" title="${game.name}">${game.name}</h3>
        <div class="card-meta">
          ${dateHtml}
        </div>
        <div class="card-meta">
          <span><i class="fa-solid fa-hard-drive"></i> ${game.storageDisplay}</span>
          <span class="os-icons">${osIcons}</span>
        </div>
        ${descHtml}
        ${notesHtml}
        <div class="card-footer">
          <button class="details-btn" onclick="showGameDetails('${game.id}')">
             <i class="fa-solid fa-circle-info"></i> Requirements
          </button>
          <button class="add-btn ${inCart ? 'in-cart' : ''}" 
            onclick="toggleCart('${game.id}')" 
            id="btn-${game.id}">
            ${inCart ? '<i class="fa-solid fa-check"></i> In Cart' : '<i class="fa-solid fa-plus"></i> Add to Cart'}
          </button>
        </div>
      </div>
    `;
    gamesGrid.appendChild(card);
  });
}

window.showGameDetails = function(id) {
  const game = games.find(g => String(g.id) === String(id));
  if (!game) return;

  const modal = document.getElementById("detailsModal");
  const content = document.getElementById("detailsContent");
  
  // Format Requirements
  let reqHtml = "<p>System requirements not available.</p>";
  
  if (game.pc_requirements) {
    if (typeof game.pc_requirements === 'string') {
        reqHtml = game.pc_requirements;
    } else {
        // Steam API usually returns object with 'minimum' and 'recommended' strings (HTML)
        const min = game.pc_requirements.minimum || "Not specified";
        const rec = game.pc_requirements.recommended || "Not specified";
        
        reqHtml = `
          <div class="req-grid">
            <div class="req-col">
              <h4><i class="fa-solid fa-minus"></i> Minimum</h4>
              <div class="req-text">${min}</div>
            </div>
            <div class="req-col">
              <h4><i class="fa-solid fa-plus"></i> Recommended</h4>
              <div class="req-text">${rec}</div>
            </div>
          </div>
        `;
    }
  }

  content.innerHTML = `
    <div class="details-header-img">
      <img src="${game.image}" alt="${game.name}">
      <div class="details-overlay">
        <h2>${game.name}</h2>
      </div>
    </div>
    <div class="details-body">
      <div class="details-desc">
        <h3>About the Game</h3>
        <p>${game.description || game.short_description || "No description available."}</p>
      </div>
      
      <div class="details-specs">
        <h3><i class="fa-solid fa-desktop"></i> System Requirements</h3>
        ${reqHtml}
      </div>
    </div>
  `;

  modal.style.display = "flex";
};

window.closeDetails = function() {
  document.getElementById("detailsModal").style.display = "none";
};

// Close details on outside click
window.addEventListener("click", (e) => {
    const dModal = document.getElementById("detailsModal");
    if (e.target == dModal) dModal.style.display = "none";
});

function getOSIcons(platforms) {
  let html = "";
  if (platforms.windows) html += '<i class="fa-brands fa-windows" title="Windows"></i>';
  if (platforms.mac) html += '<i class="fa-brands fa-apple" title="macOS"></i>';
  if (platforms.linux) html += '<i class="fa-brands fa-linux" title="Linux"></i>';
  return html;
}

function showLoader(show) {
  loader.style.display = show ? "block" : "none";
}

// --- FILTERING & SORTING ---

function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase();
  const sortType = sortSelect.value;
  // const osType = osFilterSelect.value; // Removed

  filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm);
    // const matchesOS = osType === 'all' || game.platforms[osType];
    return matchesSearch;
  });

  // Sorting
  filteredGames.sort((a, b) => {
    switch (sortType) {
      case 'size-asc': return a.storageGB - b.storageGB;
      case 'size-desc': return b.storageGB - a.storageGB;
      case 'az': return a.name.localeCompare(b.name);
      case 'za': return b.name.localeCompare(a.name);
      default: return a.name.localeCompare(b.name);
    }
  });

  renderGames(filteredGames);
}

// Event Listeners
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
// osFilterSelect.addEventListener("change", applyFilters); // Removed

// --- CART LOGIC ---

window.toggleCart = function(id) {
  id = String(id);
  const index = cart.findIndex(g => String(g.id) === id);
  const game = games.find(g => String(g.id) === id) || cart.find(g => String(g.id) === id); 
  // Fallback to searching inside cart if not in current list (e.g. switched modes)

  if (index === -1) {
    if (game) {
      cart.push(game);
      updateBtnState(id, true);
    }
  } else {
    cart.splice(index, 1);
    updateBtnState(id, false);
  }
  
  saveCartData();
};

function updateBtnState(id, inCart) {
  const btn = document.getElementById(`btn-${id}`);
  if (btn) {
    btn.className = `add-btn ${inCart ? 'in-cart' : ''}`;
    btn.innerHTML = inCart ? '<i class="fa-solid fa-check"></i> In Cart' : '<i class="fa-solid fa-plus"></i> Add to Cart';
  }
}

function saveCartData() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  cartCount.innerText = cart.length;
  totalCountEl.innerText = cart.length;
  
  const totalGB = cart.reduce((sum, g) => sum + (g.storageGB || 0), 0);
  totalSizeEl.innerText = totalGB.toFixed(2);
  
  const warningEl = document.getElementById("storageWarning");
  if (totalGB > 100) warningEl.classList.remove("hidden");
  else warningEl.classList.add("hidden");

  cartItemsList.innerHTML = "";
  cart.forEach((g, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${g.name}</span>
      <div style="display:flex; gap:10px; align-items:center;">
        <span style="font-size:0.9em; color:#aaa;">${g.storageDisplay || "Unknown"}</span>
        <button class="remove-btn" onclick="removeFromCart(${i})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    cartItemsList.appendChild(li);
  });
}

window.removeFromCart = function(index) {
  const gameId = cart[index].id;
  cart.splice(index, 1);
  saveCartData();
  updateBtnState(gameId, false);
};

window.clearCart = function() {
  cart.forEach(g => updateBtnState(g.id, false));
  cart = [];
  saveCartData();
};

window.sendToAdmin = function() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  
  const header = "Hello, I would like to order the following games and need help setting them up:";
  const items = cart.map(g => `• ${g.name} (${g.storageDisplay})`).join("\n");
  const footer = `\nTotal Storage: ${totalSizeEl.innerText} GB\nTotal Games: ${cart.length}`;
  
  const fullMessage = `${header}\n\n${items}\n${footer}`;
  
  // Facebook Messenger Link
  // Using m.me link with ref (text support varies) or clipboard fallback
  // The most reliable way for "Chat me" is to open Messenger.
  // We can try the 'text' parameter, but it's not officially supported everywhere.
  
  // Copy to clipboard first for better UX
  navigator.clipboard.writeText(fullMessage).then(() => {
    alert("Order details copied to clipboard! Opening Messenger...");
    window.open("https://www.facebook.com/messages/t/61584570472070", "_blank");
  }).catch(() => {
    // Fallback if clipboard fails
    window.open("https://www.facebook.com/profile.php?id=61584570472070", "_blank");
  });
};

// Modal Handling
document.getElementById("cartBtn").onclick = () => {
  cartModal.style.display = "flex";
};

window.closeCart = function() {
  cartModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == cartModal) {
    closeCart();
  }
};

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
let isDark = true;
themeToggle.onclick = () => {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.style.setProperty('--bg-primary', '#1b2838');
    document.documentElement.style.setProperty('--bg-secondary', '#171a21');
    document.documentElement.style.setProperty('--text-primary', '#c7d5e0');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.documentElement.style.setProperty('--bg-primary', '#f0f2f5');
    document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#1a1a1a');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
};
