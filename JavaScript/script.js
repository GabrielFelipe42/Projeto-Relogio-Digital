const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let seg = dateToday.getSeconds()

    if (hr < 10) {
        horas.innerHTML = '0' + hr
    } else {
        horas.innerHTML = hr
    }

    if (min < 10) {
        minutos.innerHTML = '0' + min
    } else {
        minutos.innerHTML = min
    }

    if (seg < 10) {
        segundos.innerHTML = '0' + seg
    } else {
        segundos.innerHTML = seg
    }
})