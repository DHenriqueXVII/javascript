var horario = new Date()
var hora = horario.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 4) {
    console.log('Boa madrugada!')
}
else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 19) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}