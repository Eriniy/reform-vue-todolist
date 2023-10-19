import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss'  // styles
import components from './components/UI'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
