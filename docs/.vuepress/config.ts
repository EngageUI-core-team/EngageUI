const { path } = require('@vuepress/utils');
// module.exports = {
//   title: 'EngageUI',
//   theme: path.resolve(__dirname, '../.vuepress/theme/lib/index.ts'),
// };

// export {};
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  //   lang: 'en-US',
  title: 'EngageUI',
  description: 'Just playing around',
  theme: path.resolve(__dirname, '../.vuepress/theme/lib/index.ts'),

  //   theme: '@vuepress/theme-default',
  //   themeConfig: {
  //     logo: 'https://vuejs.org/images/logo.png',
  //   },
});
