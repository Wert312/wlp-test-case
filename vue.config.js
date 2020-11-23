module.exports = {
  publicPath: '/wlp-test-case/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_mixins.scss";
        `
      }
    }
  }
};
