function voto() {
    var nTxt = document.getElementById('idIdade')
    var nNum = Number(nTxt.value)
    var resu = document.getElementById('resu')

    if (nNum < 16) {   
        resu.innerHTML +="Você ainda não pode votar"
    } else if (nNum >= 16 && nNum < 18 || nNum > 70) {
        resu.innerHTML +="Seu voto é opcional"
    } else if (nNum >= 18) {
        resu.innerHTML +="Seu voto é obrigatório"
    }
}