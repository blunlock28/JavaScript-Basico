// - Un nuevo Set con los nombres de tu familia
const nombres = ["Santiago", "Samuel", "Salomón", "Lulibeth", "José"]
const miFamilia = new Set(nombres)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miFamilia.add("José")
console.log(miFamilia)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miFamilia.add("Javascript")
console.log(miFamilia)

