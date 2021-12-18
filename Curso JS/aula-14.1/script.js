var btn = document.getElementById('btnIni');


btn.onclick = function gerarTable() {
    let numTxt = document.getElementById('numTab');
    let table = document.getElementById('seltab')

    if (numTxt.value.length == 0) {
        window.alert('[Erro!!] Digite um Número para Prosseguir')
    } else {
        let num = Number(numTxt.value)
        table.innerHTML=''

        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            
            item.text=`${num} X ${c} = ${num*c}`
            item.value=`${c}`
            table.appendChild(item)
        }
    }
}








/*  btn.addEventListener('click', () => {
        window.alert(' ioio ')
})  somente para estudo ; for study only */