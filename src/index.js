import Promise from 'promise-polyfill'
import 'whatwg-fetch'
import Data from './js/data'
import GoogleMap from './js/google-maps'
import App from './js/app'
import './sass/index.scss'

window.init = () => {
  if (!window.Promise) {
    window.Promise = Promise
  }

  const mapElement = document.getElementById('map')

  const data = new Data()
  const map = new GoogleMap()
  map.render(mapElement)
  const app = new App({ data, map })
  app.initApp()
}
