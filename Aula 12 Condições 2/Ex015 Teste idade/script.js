function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            gen='Homem'
            if(idade >=0 && idade < 3){ 
                //Neném
                img.setAttribute('src','foto-meninobebe.png')
            } else if (idade < 12){
                //criança
                img.setAttribute('src','foto-menino.png')
            } else if (idade < 18){
                //jovem
                img.setAttribute('src','foto-mocinho.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-homem.png')
            } else {
                //idoso
                img.setAttribute('src','foto-velhote.png')
            }
        } else if (fsex[1].checked){
            gen = 'Mulher'
            if(idade >=0 && idade < 3){ 
                //Neném
                img.setAttribute('src','foto-meninabebe.png')
            } else if (idade < 12){
                //criança
                img.setAttribute('src','foto-menina.png')
              
            } else if (idade < 18){
                //jovem
                img.setAttribute('src','foto-mocinha.png')
           
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','foto-mulher.png')
           
            } else {
                //idoso
                img.setAttribute('src','foto-velhaca.png')
           
            }
        }
        res.style.textAlign='center'
        res.innerHTML = `Detectamos: ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}