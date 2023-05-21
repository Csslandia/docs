// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'csslandia'
import './style.css'

import NotFound from '../components/NotFound.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'not-found': () => h(NotFound)
    })
  }
}
