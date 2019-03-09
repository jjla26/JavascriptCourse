
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