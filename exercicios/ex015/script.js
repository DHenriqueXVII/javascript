function carregar() {
    var horario = new Date()
    var horas = horario.getHours()
    var minutos = horario.getMinutes()
    var relogio = document.querySelector('#horario')
    relogio.innerHTML = `<p>Agora são ${horas}:${minutos}</p>`
    var div_relogio = document.querySelector('#caixa-relogio')

    if (horas < 10 || minutos < 10) {
        if (horas < 10 && minutos < 10) {
            relogio.innerHTML = `<p>Agora são 0${horas}:0${minutos}</p>`
        } else if (horas < 10 && minutos >= 10) {
            relogio.innerHTML = `<p>Agora são 0${horas}:${minutos}</p>`
        } else if (horas >= 10 && minutos < 10) {
            relogio.innerHTML = `<p>Agora são ${horas}:0${minutos}</p>`
        }
    }

    if (horas >= 4 && horas < 12) {
        relogio.innerHTML += '<img src="imagens/manha.jpg"><p>Bom dia!</p>'
        document.body.style.background = '#b0c6d9'
        div_relogio.style.background = 'rgba(0, 0, 0, 0.200)'
        div_relogio.style.color = '#e2e2e2'
    } else if (horas >= 12 && horas < 19) {
        relogio.innerHTML += '<img src="imagens/tarde.jpg"><p>Boa tarde!</p>'
        document.body.style.background = '#f27b50'
        div_relogio.style.background = 'rgba(0, 0, 0, 0.200)'
        div_relogio.style.color = '#e2e2e2'
    } else {
        relogio.innerHTML += '<img src="imagens/noite.jpg"><p>Boa noite!</p>'
        document.body.style.background = '#314259'
        div_relogio.style.background = 'rgba(0, 0, 0, 0.200)'
        div_relogio.style.color = '#e2e2e2'
    }
}