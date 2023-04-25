import DefaultTheme from 'vitepress/theme';

import '@hw/theme-chalk/src/index.scss';

import HwIcon from '@hw/components/icon';
import HwButton from '@hw/components/button';

const plugins = [HwIcon, HwButton];

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    plugins.forEach(plugin => app.use(plugin));
  }
};
