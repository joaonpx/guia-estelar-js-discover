// function scope
let subject = 'study'

function pinto(subject) {
  subject = 'read'
  return subject
}

console.log(pinto(subject))
console.log(subject)
