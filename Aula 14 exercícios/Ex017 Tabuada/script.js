function clicar() {
var numero1 = document.getElementById('n1')
var res = document.getElementById('res')

var n1 = Number(numero1.value)
var contar = 1

if (numero1.value.length == 0){
    res.innerHTML='Impossivel calcular'
    window.alert('[ERRO] Vc não adicionou nada no campo Número')
    
} else {
    res.innerHTML=''
    while (contar <= 10) {
        var item = document.createElement('option')
        item.text= `${n1} x ${contar} = ${n1*contar}`
        item.value = `res${contar}`
        res.appendChild(item)
        contar++
    }

    
}

}