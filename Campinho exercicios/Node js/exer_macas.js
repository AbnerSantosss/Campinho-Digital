//As maças custam 0.30 centavos cada, se forem compradas menos do que 12, e R$:0.25,00 se forem compradas 12 ou mais. Ecreva um programa que leia o número de maças e compradas, calcule e escreva o valor total da compra//

let rs = require('readline-sync')

let quantidade = parseInt(rs.question('Digite a quantidade de macas desejada'))

if (quantidade < 12) {
  let n1 = quantidade * 0.3
  console.log('sua compra ficou no valor de R$:', n1)
} else {
  let n2 = quantidade * 0.25
  console.log('sua compra ficou no valor de R$:', n2, ',00')
}
