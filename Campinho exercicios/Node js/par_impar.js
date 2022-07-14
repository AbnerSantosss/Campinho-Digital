//Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, escrevendo na tela "PAR" ou "IMPAR"

let rs = require('readline-sync')

let numeroUsuario = parseInt(
  rs.question('Digite um numero, e vamos verificar se ele e par ou impar')
)

if (numeroUsuario % 2 == 0) {
  console.log('O número é par')
} else {
  console.log('O número é impar')
}
