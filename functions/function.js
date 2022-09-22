// retornando valores

// function sum(number1, number2) {
//   return number1 + number2
// }

// let number1 = 2
// let number2 = 3

// console.log(`o número primeiro é: ${number1}`)
// console.log(`o número segundo é: ${number2}`)
// console.log(`o resultado é ${sum(number1, number2)}`)

// function scope
// let subject = 'study'

// function pinto(subject) {
//   subject = 'read'
//   return subject
// }

// console.log(pinto(subject))
// console.log(subject)

// arrow function
// let sayEae = () => {
//   console.log('eae')
// }

// sayEae()

// callback function

function sayMyName(name) {
  console.log('antes de executar a callback')

  name()

  console.log('depois de executar a callback')
}

sayMyName(() => {
  console.log('João')
})
