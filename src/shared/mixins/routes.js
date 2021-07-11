const routes = {
  panel: {
    self: `panel`,
    order: `/${this.self}/order`,
    tickets: {
      self: `/panel/tickets`,
      create: `${this.self}/create`
    }
  }
};

export default routes;
