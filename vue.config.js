module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    vuetify: {
      treeShake: true
      // customVariables: ["~/assets/variables.scss"]
    },
    i18n: {
      locale: "fa",
      fallbackLocale: "fa",
      localeDir: "locales",
      enableInSFC: true
    }
  }
};
