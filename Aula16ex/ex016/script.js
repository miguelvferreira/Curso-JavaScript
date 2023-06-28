let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        //window.alert('Tudo ok!')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado!')
    }
    num.value = ''
    num.focus()
}
function Finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            
            if (valores[pos]>maior)
                maior = valores[pos]
            if (valores[pos]<menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} numeros registados!</p>`
        res.innerHTML += `<p>O maior valor inserido foi ${maior}!`
        res.innerHTML += `<p>O menor valor inserido foi ${menor}!`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}!`
        res.innerHTML += `<p>A media de todos os valores é de ${media}!`
    }
}