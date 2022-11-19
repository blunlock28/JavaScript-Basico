// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fecha = new Date()
console.log(fecha)
// - La fecha de tu nacimiento
const FechaDeNacimiento = new Date(1981, 7, 28)
console.log(FechaDeNacimiento)
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const tiempo = (fecha > FechaDeNacimiento )
console.log(tiempo)
// - Una variable que contenga el día de tu nacimiento
const diaDeNacieminto = FechaDeNacimiento.getDate()
console.log(diaDeNacieminto)
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesDeNacimiento = FechaDeNacimiento.getMonth()
console.log(mesDeNacimiento+1)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoDeNacimiento = FechaDeNacimiento.getFullYear()
console.log(anyoDeNacimiento)