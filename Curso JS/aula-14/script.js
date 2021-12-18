function contar() {
    let iniTxt = document.getElementById('ini')
    let fimTxt = document.getElementById('fim')
    let passTxt = document.getElementById('pass')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[Erro!!] Falta Dados')
    } else {
        res.innerHTML='Contando...<br/>'
        let iniNum = Number(iniTxt.value)
        let fimNum = Number(fimTxt.value)
        let passNum = Number(passTxt.value)
        if (passNum <= 0) {
            passNum = 1
        }

        if (iniNum > fimNum) {

            for (let numFim = iniNum; numFim >= fimNum; numFim -= passNum) {
                res.innerHTML+=` ${numFim} \u{1F449}`
                //res.innerHTML+= String.fromCodePoint(0x1F449)  Apenas outra forma de usar emojis 
            }
        
        } else {
            
            for (let numFim = iniNum; numFim <= fimNum; numFim += passNum) {
                res.innerHTML+=` ${numFim} \u{1F449}`
            }
        }
        res.innerHTML+=`\u{1F3C1}`
    }
}