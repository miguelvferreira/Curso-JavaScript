var idade = 15
console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log(' Você é menor , não pode entrar neste estabelecimento!')
}else if (idade<=16 || idade <18){
    console.log('Você é menor de idade , não pode consumir alcool!')
}else{
    console.log('Voce é maior de idade ,bar aberto!')
}