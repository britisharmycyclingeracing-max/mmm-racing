function setActiveNav() {
  const path = window.location.pathname.split("/").pop() || "index.html";

  const navMap = {
    "index.html": "nav-home",
    "results-index.html": "nav-results",
    "results.html": "nav-results",
    "standings.html": "nav-standings",
    "riders.html": "nav-riders",
    "profile.html": "nav-riders",
    "rules.html": "nav-rules"
  };

  const activeId = navMap[path] || "nav-home";
  const activeEl = document.getElementById(activeId);

  if (activeEl) {
    activeEl.classList.add("active");
  }
}

function loadSiteLogo() {
  if (typeof api !== "function") return;

  api("home")
    .then(data => {
      if (!data || data.ok === false) return;

      const logo = data?.assets?.UI?.SiteLogo;
      if (!logo) return;

      const nav = document.getElementById("navLogoImg");
      if (!nav) return;

      nav.src = logo;
      nav.alt = "Army Cycling";
    })
    .catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  loadSiteLogo();
});
