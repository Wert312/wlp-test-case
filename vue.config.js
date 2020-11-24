module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wlp-test-case/' : '/',
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
