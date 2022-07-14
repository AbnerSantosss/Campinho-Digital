let rs = require('readline-sync')
console.log(
  'Bem vindo ao Sistema, Digite na sequencia 3 valores de numeros interios'
)
//O Programa Recebe um 3 valores e colocam e ordem crescente//
let numeros = []

for (let i = 0; i < 3; i++) {
  let cont = i + 1
  let quantidade = parseInt(rs.question('Digite o valor ' + cont++ + ':'))
  if (quantidade != numeros) {
    numeros.push(quantidade)
  } else {
    console.log('Os numeros nao podem ser iguais')
  }
}
numeros.sort()

console.log(numeros)
