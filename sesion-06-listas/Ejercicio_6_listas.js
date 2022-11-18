
// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = [ "leche","huevo","carne","pescado","harima","jugo"]
console.log(compra)
// - Modifica la lista de la compra y añádele "Aceite de Girasol"
 compra.push("aceite de girasol")
console.log(compra)
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop()
console.log(compra)
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas =[
    {titulo: "batman3", director:"dc comic", fecha: new Date(2022, 2, 1)},
    {titulo: "batman2", director:"marvel", fecha: new Date (2012, 7, 28)},
    {titulo: "batman", director:"liga de laq justicia", fecha: new Date(2000, 8, 13)}
]
console.log(peliculas)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newPeliculas = peliculas.filter(peliculas => peliculas.fecha > new Date(2010, 0, 1))
console.log(newPeliculas)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const director = peliculas.map((peliculas) => peliculas.director)
console.log(director)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((peliculas)=> peliculas.titulo)
console.log(titulos)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const peliculas2 = director.concat(titulos)
console.log(peliculas2)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const peliculasPropagacion = [...director, ...titulos]
console.log(peliculasPropagacion)