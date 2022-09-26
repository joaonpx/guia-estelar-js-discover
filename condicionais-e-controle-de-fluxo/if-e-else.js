let temperature = 38
let highTemperature = temperature >= 37.9
let mediumTemperature = temperature < 37.9 && temperature >= 37

if (highTemperature) {
  console.log('Febre')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Temperatura normal')
}
