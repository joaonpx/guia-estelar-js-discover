let techs = ['html', 'css', 'js']

// adicionando um item no final do array
techs.push('git')

// adicionando um item no começo do array
techs.unshift('sass')

// retirando um item do começo do array
// techs.shift()

// selecionando items especificos do array
// console.log(techs.slice(0, 1))

// removendo 1 ou mais items do array
// techs.splice(3, 1)

let index = techs.indexOf('sass')
techs.splice(index, 1)

console.log(techs)
