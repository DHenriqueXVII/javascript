var verificar = document.querySelector('#verificar')
verificar.addEventListener('click', function_verificar)

function function_verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nascimento = Number.parseInt(document.querySelector('#ano-nascimento').value)
    var idade = ano - ano_nascimento
    var sexo = document.querySelector('input[name="sexo"]:checked').value
    var resultado = document.querySelector('#resultado')

    if (ano_nascimento < 1900) {
        resultado.innerHTML = '<p>[ERRO] Incompatível com a rainha Elizabeth.</p>'
    } else {
        if (ano_nascimento > ano) {
            resultado.innerHTML = '<p>Por favor, informe valores válidos!</p>'
        } else {
            switch (sexo) {
                case 'masculino':
                    if (idade < 12) {
                        resultado.innerHTML = `<p>Você é um menino de ${idade} anos</p><img src="imagens/menino.jpg">`
                    } else if (idade < 21) {
                        resultado.innerHTML = `<p>Você é um adolescente de ${idade} anos</p><img src="imagens/adolescentem.jpg">`
                    } else if (idade < 60) {
                        resultado.innerHTML = `<p>Você é um homem de ${idade} anos</p><img src="imagens/homem.jpg">`
                    } else {
                        resultado.innerHTML = `<p>Você é um idoso de ${idade} anos</p><img src="imagens/idoso.jpg">`
                    }
                    break
                case 'feminino':
                    if (idade < 12) {
                        resultado.innerHTML = `<p>Você é uma menina de ${idade} anos</p><img src="imagens/menina.jpg">`
                    } else if (idade < 21) {
                        resultado.innerHTML = `<p>Você é uma adolescente de ${idade} anos</p><img src="imagens/adolescentf.jpg">`
                    } else if (idade < 60) {
                        resultado.innerHTML = `<p>Você é uma mulher de ${idade} anos</p><img src="imagens/mulher.jpg">`
                    } else {
                        resultado.innerHTML = `<p>Você é uma idosa de ${idade} anos</p><img src="imagens/idosa.jpg">`
                    }
                    break
            }
        }
    }
}