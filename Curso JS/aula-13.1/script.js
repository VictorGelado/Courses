function verificar() {
    var dtNas = document.getElementById('dtNasId')
    var sexo = document.getElementsByName('sexo')
    var date = new Date()
    var ano = date.getFullYear()
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (Number(dtNas.value.length) == 0 || Number(dtNas) > ano) {
        res.innerHTML='[Erro] Verifique os dado e os digite novamente'
    }
    var idade = ano - dtNas.value
    var genero = ''
    if (sexo[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 12) {
            img.setAttribute('src', 'imagens/homem-crianca.png')
        } else if (idade <= 20) {
            img.setAttribute('src', 'imagens/homem-jovem.png')
        } else if (idade <= 59) {
            img.setAttribute('src', 'imagens/homem-adulto.png')
        } else {
            img.setAttribute('src', 'imagens/homem-idoso.png')
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 12) {
            img.setAttribute('src', 'imagens/mulher-crianca.png')
        } else if (idade <= 20) {
            img.setAttribute('src', 'imagens/mulher-jovem.png')
        } else if (idade <= 59) {
            img.setAttribute('src', 'imagens/mulher-adulta.png')
        } else {
            img.setAttribute('src', 'imagens/mulher-idosa.png')
        }
    }
    res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}