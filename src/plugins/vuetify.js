/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// Composables
import { createVuetify } from 'vuetify'


const PRIMARY = "#001738";
const BLUE = "#75787B";

let THEME_PRIMARY = PRIMARY;



// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {

    themes: {

      light: {
        colors: {
          primary: THEME_PRIMARY,
          danger: '#ff0f0f',
          success1: '#cefad0'
        },
      },
    },

  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },

})
