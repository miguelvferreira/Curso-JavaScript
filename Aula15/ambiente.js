/*let num = [5,8,2,9,3]
console.log(num)
console.log(`O nosso array tem ${num.length} posicoes!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num.sort())
*/

/*let valores = [1,4,6,8,9,5]
console.log(valores[0])
for (let pos = 0; pos< valores.length ;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

let num = [4,5,6,7,9]
for(let pos in num){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
let pos = num.indexOf(7)
console.log(`O valor 7 esta na posiçao ${pos}`)