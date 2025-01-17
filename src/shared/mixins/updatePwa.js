export default {
  data() {
    return {
      registration: null,
      updateExists: false,
      refreshing: false
    };
  },
  created() {
    document.addEventListener("swUpdated", this.updateAvailable, {
      once: true
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) {
        return;
      }
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    updateAvailable(event) {
      this.registration = event.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
  }
};
