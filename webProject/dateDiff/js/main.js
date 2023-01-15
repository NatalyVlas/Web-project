import { getDateDiff } from './getDateDiff.js'
import { printError, printResult } from './printResult.js'
// import { Howl } from './howler.js'

const form = document.getElementById('datecalc')
const timerEl = document.querySelector('.timer')
const btnCalcEl = document.querySelector('.btn_calc')
const btnTimerEl = document.querySelector('.btn_timer')
const timerInput = document.getElementById('time')
const buttonStart = document.getElementById('start')
const buttonStop = document.getElementById('stop')
const timerShow = document.getElementById('timer')

btnTimerEl.addEventListener('click', () => {
    form.classList.add('hidden')
    timerEl.classList.remove('hidden')
    btnTimerEl.classList.add('red')
    btnCalcEl.classList.remove('red')
})
btnCalcEl.addEventListener('click', () => {
    form.classList.remove('hidden')
    timerEl.classList.add('hidden')
    btnTimerEl.classList.remove('red')
    btnCalcEl.classList.add('red')
})

form.onsubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')

    if (!firstDate || !secondDate) {
        printError('Для расчёта необходимо заполнить оба поля!')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff)
    }
}
let timeMinut
buttonStart.addEventListener('click', () => {
    timeMinut = parseInt(timerInput.value) * 60
    // console.log(timeMinut);
})
// const sound = new Howl({
//     src: ['sound.mp3']
// })


const timer = setInterval(() => {
    timeMinut--
    let seconds = timeMinut % 60
    let minutes = timeMinut / 60 % 60
    let hour = timeMinut / 60 / 60 % 60
    // if (timeMinut < 6) {
    //     sound.play()
    // }
    if (timeMinut < 0) {
        clearInterval(timer)
        alert("Время закончилось")
    } else {
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`
        timerShow.innerHTML = strTimer
    }

}, 1000)

buttonStop.addEventListener('click', () => {
    clearInterval(timer)
    timerShow.innerHTML = ''
    timerInput.value = ''
})