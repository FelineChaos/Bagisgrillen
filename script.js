if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/Bagisgrillen/service-worker.js");
  });
}
