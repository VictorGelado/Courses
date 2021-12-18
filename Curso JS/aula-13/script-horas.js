function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    
    msg.innerHTML=`Agora são ${hora} horas`
    if  (hora >= 0 && hora < 12) {
        foto.src='imagens/manharedondo.png'
        msg.innerHTML+=' da manhã.'
        document.body.style.background='#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        foto.src='imagens/tarderedondo.png'
        msg.innerHTML+=' da tarde.'
        document.body.style.background='#b9846f'
    } else {
        foto.src='imagens/noiteredondo.png'
        msg.innerHTML+=' da noite.'
        document.body.style.background='#515154'
    }
}