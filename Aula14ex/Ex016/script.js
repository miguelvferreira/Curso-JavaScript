function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length==0){
        window.alert('Dados incompletos,por favor verifique os valores!')
        res.innerHTML='Impossivel contar!'
    }else{
        res.innerHTML='Contar:<br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo invalido!Considerando "Passo" 1!') 
            //se o utilizador nao introduzir valor no "Passo" recebe um alerta e o valor do passo recebe 1!
            p = 1
        }
        if (i < f){
            //contagem crescente
            for (let c = i; c <=f;c+=p ){
                res.innerHTML+= ` ${c} \u{1F449}`
            }
        }else{
            //contagem decrescente
            for(let c=i ;c >= f;c -= p){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}