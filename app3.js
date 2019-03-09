// valor y referencia

var a = 10;
var b = a; 

console.log("a:", a);
console.log("b:", b);

a = 20;

console.log("a:", a);
console.log("b:", b);

var c = {
    nombre: "Julio"
};

var d = c;

console.log("c:",c);
console.log("d:",d);

c.nombre = "Jose";

console.log("c:",c);
console.log("d:",d);

//notacion de puntos y corchetes
var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        calle: "cienfuegos",
        numero: 78,
        edificio: {
            numero: 303,
            torre: "a"
        }
    }
}

//notacion de puntos
console.log(persona.nombre)
console.log(persona.direccion.calle)

console.log(persona.direccion.edificio.numero)

var edificio = persona.direccion.edificio;

edificio.nopiso = "tercer piso";

var campo = "nombre";

console.log( persona[campo] )












