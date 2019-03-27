function crearPersona(nombre, edad){

    nombre = nombre || "Sin Nombre";
    edad = edad || "Sin edad"
    console.log("Nombre:", nombre, "Edad:", edad)

}

function crearPersona2(nombre){
    crearPersona(nombre, 30);
}

function crearPersona3(edad){
    crearPersona("Kristina",edad)
}

crearPersona2("Julio"),
crearPersona3(25);

