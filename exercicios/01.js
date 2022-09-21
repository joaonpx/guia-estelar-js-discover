// 1. declare uma variavel de nome weight
let weight

// 2. que tipo de dado é a variavel acima?
// console.log(typeof weight)

/* 
  3. declare uma variavel e atribua valores para cada um dos dados:
      * name: String
      * age: Number (integer)
      * stars: Number (float)
      * inSubscribed: Boolean
*/
// let name, age, stars, inSubscribed

let name = 'João'
let age = 18
let stars = 8.7
let inSubscribed = false

/* 
  4. a variavel student abaixo é de que tipo de dados?
  
  4.1 atribua a ela as mesmas propriedades e valors do exercicio 3

  4.2 mostre no console a seguinte mensagem:

      <name> de idade <age> pesa <weight> kg.

      atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
  name: 'João',
  age: 18,
  weight: 56.6,
  stars: 8.7,
  inSubscribed: true
}

// console.log(typeof student)

// console.log(
//   `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
// )

/*
  5. declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja somente o array vazio
*/

let students = []

/*
  6. reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student]

/*
  7. coloque no console o valor da posição zero do array acima
*/

// console.log(students[0])

/*
  8. crie um novo student e coloque na posição 1 do array students
*/

const leticia = {
  name: 'Leticia',
  age: 17,
  weight: 40.3,
  stars: 9.2,
  inSubscribed: true
}

students[1] = leticia

// console.log(students)

/* 
  9. sem rodar o código responda qual é a resposta do
  código abaixo e por que? após sua resposta, rode o
  código e veja se você acertou.

  console.log(a)
  var = 1

  R: vai vir um valor undefined, porque a variavel foi criada a baixo do console.log, isso vai fazer com que a declaração dela suba por conta do hoisting

*/
