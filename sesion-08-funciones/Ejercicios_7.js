// - Una función sin parámetros que devuelva siempre "true"
function sinParametros(){
    return true
}
console.log(sinParametros())
// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
async function Promesa(){ setTimeout(() => console.log("Hola soy una promesa") , 5000);//el tiempo tienen que estar en milisegundos
}
console.log(Promesa())
//otra forma
async function Promesa2(){
    console.log("Hola Soy una Promesa2")
}
    setTimeout(Promesa2,5000);
// - Una función generadora de índices pares automáticos
function* generadorPares(){
    let id = 0;
    while(true) {
        id+=2;
        yield id;
    }
}
const pares = generadorPares()
console.log(pares.next())
console.log(pares.next())
console.log(pares.next())
