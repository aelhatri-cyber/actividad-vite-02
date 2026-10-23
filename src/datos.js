export function setupCounter(element) {
  let dato = 0
  let color = 0

  const setCounter = () => {
    dato++
    color = (color + 1) % 101

    element.innerHTML = `Dato: ${dato}`

    const rojo = Math.round(100 + (color / 100) * 53)
    const verde = Math.round(108 - (color / 100) * 55)
    const azul = Math.round(255 - (color / 100) * 10)

    element.style.backgroundColor =
      `rgb(${rojo}, ${verde}, ${azul})`
  }

  element.addEventListener('click', setCounter)
}