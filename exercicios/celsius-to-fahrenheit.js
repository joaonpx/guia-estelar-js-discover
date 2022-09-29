/* 
  Crie uma função que receba uma string em celsius ou fahrenheit
  e faça a transformação de uma unidade para outra 
      C = (F - 32) * 5/9 
      F = C * 9/5 + 32
*/

function celsiusToFahrenheit(c) {
  let result = (c * 9) / 5 + 32

  return result
}

function fahrenheitToCelsius(f) {
  let result = ((f - 32) * 5) / 9

  return result
}

console.log(celsiusToFahrenheit(0))
console.log(fahrenheitToCelsius(32))
