// funções contrutoras
function Person(name, age, weight) {
  this.name = name
  this.age = age
  this.weight = weight
  this.walk = () => {
    return `${this.name} está andando!`
  }
}

const joao = new Person('João', 18, 54.6)

console.log(joao.name)
