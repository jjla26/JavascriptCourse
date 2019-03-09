
// Parametros de las funciones

function imprimir ( nombre, apellido ){

    apellido = apellido || "xxx"

    console.log( nombre + " " + apellido );
    console.log( nombre.nombre + " " + nombre.apellido);
}

function imprimir2( fn ){
    fn();

}

var persona = {
    nombre: "Julio",
    apellido: "Lopez"
}

imprimir( "Juan"  );

imprimir( {
    nombre: "Juan",
    apellido: "Padilla"
});

imprimir( persona );

imprimir2( function(){
    console.log("Funcion Anonima")
});

//retorno de las funciones


function obtenerAleatorio(){
    return Math.random();
}

function obtenerNombre(){
    return "Juan"
}

function booleano(){
    if( obtenerAleatorio() > 0.5 ){
        return true; 
    }else{
        return false};
    }
console.log(obtenerAleatorio() + 10)

console.log(obtenerNombre() + "Perez")

if( booleano()){
    console.log("es mayor a 0.5")
}else{
    console.log("es menor a 0.5")
}

function createFunction(){
    return function(nombre){
        console.log("Me Creo!!!"+ nombre )
        return function(){
            console.log("segunda function")
        }
    }
}

var nuevaFunction = createFunction();
nuevaFunction(persona.nombre);

var segundaFunction = nuevaFunction( persona.nombre );

segundaFunction();

