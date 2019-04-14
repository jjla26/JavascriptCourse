var objetoJS={
    nombre: "Fernando",
    edad: "30"
}

console.log("Objeto Literal", objetoJS)

var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson)