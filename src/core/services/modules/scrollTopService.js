class ScrollTopService {
  $scrollTop() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default new ScrollTopService();
