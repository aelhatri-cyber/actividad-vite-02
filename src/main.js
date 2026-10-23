import './style.css'
import { setupCounter } from './datos.js'

document.querySelector('#app').innerHTML = `
  <h1>¡Hola, mundo!</h1>
  <p>Mi segunda web con Vite.</p>
  <button id="counter" type="button">Dato: 0</button>
`

setupCounter(document.querySelector('#counter'))