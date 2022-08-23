const hoy = new Date()

const nacimiento = new Date(2004, 11, 17)

const comparacion = hoy > nacimiento

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const anyoNacimiento = nacimiento.getFullYear()