var btn =  document.getElementById('btnAdi')
var btnFinal = document.getElementById('btnFinal')
let tab = document.getElementById('selAdi')
let res = document.getElementById('res')
let numTxt = document.getElementById('numTab')
let val = []

function verNum(n) {
    
    if (n <= 100 && n >= 1) {        
        return true
    } else {
        return false
    }

}

function verLis(n, lis) {
    
    if (lis.indexOf(n) != -1) {
        return true 
    } else {
        return false
    }

}


btn.addEventListener('click', function() {
    
    let num = Number(numTxt.value)

    if (verNum(num) && !verLis(num, val)) {
        
        val.push(num)
        let item = document.createElement('option')

        item.text=`Valor ${num} Adicionado`
        tab.appendChild(item)
        res.innerHTML=''
        
    } else {
        window.alert('[Erro!] O valor já foi adicionado ou é inválido!')
    } 
    numTxt.value=''
    numTxt.focus()

})


btnFinal.addEventListener('click', function() {

    if (val.length == 0) {
        window.alert('[Erro!] Adicione um valor antes de finalizar!')
        numTxt.focus()
    } else {
        val.sort()
        let numCad = val.length
        let numMai = Math.max.apply(null, val)
        let numMen = Math.min.apply(null, val)
        let numSom = val.reduce((tot, elemen) => tot + elemen)
        let numMed = numSom / numCad 

        
        res.innerHTML+=`<p>Ao todo, temos ${numCad} números cadastrados.</p>`
        res.innerHTML+=`<p>O maior valor adicionado foi ${numMai}.</p>`
        res.innerHTML+=`<p>O menor valor adicionado foi ${numMen}.</p>`
        res.innerHTML+=`<p>Somando todos os valores temos ${numSom}.</p>`
        res.innerHTML+=`<p>A média entre os valores adicionados é ${numMed.toFixed(2)}.</p>`
    
    }
    tab.innerHTML=''
    val = []

})