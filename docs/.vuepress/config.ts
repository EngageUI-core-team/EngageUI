const { path } = require('@vuepress/utils');

import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  title: 'EngageUI',
  description: 'Just playing around',
  theme: path.resolve(__dirname, '../.vuepress/theme/lib/index.ts'),
  // plugins: [['@vuepress/nprogress']],
  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  // themeConfig: {
  //   logo: 'https://vuejs.org/images/logo.png',
  // },
});
