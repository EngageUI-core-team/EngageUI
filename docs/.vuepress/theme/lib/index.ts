const { path } = require('@vuepress/utils');

const EngageUITheme = {
  name: 'engageui-theme',
  layouts: {
    Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    404: path.resolve(__dirname, 'layouts/error.vue'),
  },
};

module.exports = EngageUITheme;

// export {};
