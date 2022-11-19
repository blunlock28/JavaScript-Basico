// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {nombre:"José", apellido:"Pinto", edad:41, altura:185, eresDesarrollador:true}
// - Una variable que obtenga tu edad a partir del objeto anterior
const miEdad =datos.edad
console.log(miEdad)
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosListas = [
    {...datos},
    { nombre: "Leire", edad: 35} ,
    { nombre: "Gorka", edad: 34} ,
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29},
    { nombre: "yonattan", edad: 37 }
]
console.log(datosListas)


// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaDeAmigosOrdenada = datosListas.sort((a,b)=>b.edad - a.edad )
console.log(listaDeAmigosOrdenada)
