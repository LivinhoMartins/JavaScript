let valores = [3,5,3,6,7]
valores.sort()
valores.push(1)
console.log(valores)
/*for(let pos=0;pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log (`A posição ${pos} vale ${valores[pos]}`)
}

let posi = valores.indexOf(7)
console.log (`o valor 7 está na posição ${posi}`)