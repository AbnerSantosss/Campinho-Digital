//Programa para calcular o dia do nascimento e informar a pessoa se ela pode votar ou não!

let rs = require('readline-sync')

console.log(
  'Olá Bem vindo ao sistema!, Vamos ver se voce pode votar esse ano ok?'
)

let ano = parseInt(rs.question('Digite o ano que voce nasceu'))

let resultado = 2022 - ano

if (resultado >= 16) {
  console.log('Parabens, voce pode votar esse ano!!')
} else {
  console.log('Infelizmente voce nao pode votar')
}
