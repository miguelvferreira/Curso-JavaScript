function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu  =data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minu} minutos!`
    
    if (hora >= 0 && hora < 12){
        //Bom dia 
        img.src = 'fotomanha1.png' 
        document.body.style.background='#d9ce6a'
    }else if (hora>=12 && hora <18){
        //boa tarde
        img.src = 'fototarde.png' 
        document.body.style.background='#e3a258'
    }else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background= '#8c6862'
    }
}