/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'

export function registerPlugins(app) {
    // app.config.globalProperties.$store = store;
    app.use(router)
    .use(vuetify)

}