// Una cadena de texto con tu Nombre
let nombre = "Jose";
// - Otra cadena de texto con tu Apellido
let apellido = "Pinto";
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
 let estudiante = nombre.concat(" ", apellido);
//let estudiante = nombre + " "+ apellido ;
// let estudiante = `${nombre} ${apellido}`

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroDeLetras = estudiante.length; 
// - Una variable que contenga la primera letra del Nombre
let primeraLetra = estudiante.charAt();
// - Otra variable que contenga la última letra del Apellido
let ultimaLetra = estudiante[estudiante.length-1];
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacios = estudiante.replace(/ /g, "");
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let estudianteNombre = estudiante.includes(nombre)


console.log(estudiante)