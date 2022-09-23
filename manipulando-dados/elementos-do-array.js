let myArray = new Array(1, 'a', { theme: 'dark' }, function sum(num1, num2) {
  let total = num1 + num2
  return total
})

console.log(myArray[3](5, 15))
