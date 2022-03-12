import { createApp } from 'vue';
import DemoComponents from './src/index.jsx';

DemoComponents.install = (App) => {
  App.component('DemoComponents', DemoComponents);
};
