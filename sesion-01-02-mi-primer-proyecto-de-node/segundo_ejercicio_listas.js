// Tu nombre (string)

// - Tu edad (number)

// - ¿Eres desarrollador? (boolean)

// - Tu fecha de nacimiento (Date)

// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
const libro = {
    titulo : "Aprendiendo JavaScript: Desde cero hasta ECMAScript 6+",
    autor : "Carlos Azaustre",
    fecha : new Date("26 enero 2021"),
    idioma : "español"
}
fechaDeNacimiento = new Date(1981, 7, 28)

const lista = ["Jose", 41, true, fechaDeNacimiento, libro ];
console.log(lista);

