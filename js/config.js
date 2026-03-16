// MMM API configuration

const API_BASE = "https://script.google.com/macros/s/AKfycbyXmaCTP9hMKVMZzfsGc73W8jEatq0M5pKP6Wg1X6olc-r1uCDHTSvzj5RZNSFk9qxvPA/exec";

function api(endpoint, params = {}) {
  const url = new URL(API_BASE);
  url.searchParams.set("api", endpoint);

  Object.entries(params).forEach(([k, v]) => {
    url.searchParams.set(k, v);
  });

  return fetch(url).then(res => res.json());
}
