/* 
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
  Agora, crie uma função que irá calcular o total de receitas e 
  despesas e irá mostrar uma mensagem se a família está com 
  saldo positivo ou negativo, seguido do valor do saldo.
*/

let cashier = {
  revenues: [100, 250],
  expenses: [28, 16, 89.5, 32]
}

function sum(array) {
  let total = 0

  for (let i in array) {
    total += array[i]
  }

  return total
}

let revenues = sum(cashier.revenues)
let expenses = sum(cashier.expenses)

function calcBalance() {
  let balance = revenues - expenses

  return balance
}

console.log(calcBalance())
