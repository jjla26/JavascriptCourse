
function crearCookie(nombre, valor){
    valor = escape(valor);
    var hoy = new Date();
    console.log(hoy)
    hoy.setMonth( hoy.getMonth() + 1);
    console.log(hoy)
    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

// function borrarCookie(nombre){

// }

crearCookie("nombre","Fernando");

//  var cookies = document.cookie;
//  console.log(cookies);