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
      const logo = data?.assets?.UI?.SiteLogo;
      if (!logo) return;
      const nav = document.getElementById("navLogo");
      if (!nav) return;
      nav.innerHTML = `<img src="${logo}" alt="Army Cycling" style="height:36px;">`;
    })
    .catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  loadSiteLogo();
});
