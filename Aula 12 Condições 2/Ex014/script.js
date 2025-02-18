function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src='fotomanha.png'
        document.body.style.background='#e2cd9f'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src='fototarde.png'
        document.body.style.background='#b9846f'
    } else {
        //boa noite
        img.src='fotonoite.png'
        document.body.style.background='#515154'
    }

    if(hora >= 0 && hora < 12){
        msg2.innerHTML='Bom dia Amorzinho'
    } else if (hora >= 12 && hora < 18){
        msg2.innerHTML='Boa tarde Amorzinho'
    } else {
        msg2.innerHTML='Boa noite Amorzinho'        
    }
}   