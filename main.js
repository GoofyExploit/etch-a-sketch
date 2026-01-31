const input = document.querySelector('.size')
const grid = document.querySelector('.grid')
const buttons = document.querySelector('.buttons')
const colorInput = document.querySelector('.color-input')
let currentColor = colorInput.value
const reset = document.querySelector('.reset')
let canvas = document.querySelector('.canvas-info')

colorInput.addEventListener('input', (e) => {
    currentColor = e.target.value
})
input.addEventListener('click', () => {
    createGrid(input)
})
function createGrid(input) {
    const size = prompt('Enter the size of your canvas')
    if (size) {
        input.value = size
    }
    const gridSize = parseInt(size)
    setTimeout(() => {
        grid.innerHTML = `
            <h2>Loading...</h2>
        `
    }, 1000)
    setTimeout(() => {
        grid.innerHTML = ``
    }, 1800)
    setTimeout(() => {
        grid.setAttribute('style', 'height: 500px; width: 500px; border: 1px solid black;' +
            'display: flex; justify-content: center; align-items: center;' +
            'margin: 10px auto;' +
            'flex-direction: row; flex-wrap: wrap;'
        )
    }, 2000)
    setTimeout(() => {
        const cellSize = 500 / gridSize
        // const currentColor = color
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div')
            cell.className = 'cell'
            cell.setAttribute('style', `width: ${cellSize}px; height: ${cellSize}px; box-sizing: border-box;`)

            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = currentColor
            })
            cell.addEventListener('mouseenter', (e) => {
                if (e.buttons == 1) {
                    cell.style.backgroundColor = currentColor
                }
            })
            reset.addEventListener('click', () => {
                cell.style.backgroundColor = 'white'
            })
            grid.appendChild(cell)
        }
    }, 2100)
    setTimeout(() => {
        canvas.innerHTML = `
            <h3>Current Canvas Size: ${gridSize}</h3>
        `
    }, 2100)
}