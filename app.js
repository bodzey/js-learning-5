const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#f1ff75', '#9fea15', '#ee75f4', '#0a7f27', '#e5097e', '#5fa4dd', '#93ff97', '#998cff', '#d6a1fc', 'aefce8', '#70ef72', '#92fce3', '#f9b28e', '#b481e8', '#f9c5a4', '#95fc76', '#d39ef7', '#d9f274', '#b0f49a', '#aecafc', '#958af7', '#7b93f2', '#8df4a0', '#a4fcd0', '#b8cafc', '#ea72f9', '#f0fc94', '#97f4c4', '#9cfcee', '#ea72ae', '#97c1ef', '#a1c8ed', '#99f984', '#b8f49a', '#b5cff4', '#ae71e8', '#f2cf85', '#fcd0a4', '#ffea9e', '#f7a088', '#e8fc99', '#9e6ed8', '#ffd9cc', '#d186f4', '#f280a2', '#68c5d8', '#96ffa0', '#e0a4f9', '#fcb5ca', '#e3a9f9', '#a37de0', '#91ffff', '#d5ef88', '#98ea6b', '#f9e595', '#f7e5af', '#ed93de']


let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame ()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time === 0) {
        finishGame ()
    } else {
        let current = --time
        if (current < 10) {
        current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`

}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счёт: <span class="primary">${score}</span</h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    const color = getRandomColor()

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = color

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
     
    return colors[Math.floor(Math.random() * colors.length)]
}