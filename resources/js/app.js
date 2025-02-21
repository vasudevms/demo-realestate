import { createApp } from 'vue';
import Home from './components/Home.vue';
import Neighbourhood from './components/Neighbourhood.vue';

// Detect the component dynamically
const components = {
    'home': Home,
    'neighbourhood': Neighbourhood
};

// Get the `data-page` attribute from your HTML
const pageName = document.getElementById('app')?.dataset.page;

if (components[pageName]) {
    createApp(components[pageName]).mount('#app');
}
