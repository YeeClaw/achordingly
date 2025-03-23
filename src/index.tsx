import { root } from '@lynx-js/react'

import { Home } from './components/Home.js'

root.render(<Home/>)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
