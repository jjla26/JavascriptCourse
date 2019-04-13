
function crearCookie(nombre, valor){
    valor = escape(valor)
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1);
    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}

function borrarCookie( nombre ){
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() - 1);
    document.cookie = nombre+"=x;expires="+hoy.toUTCString()+";";
}

function getCookie( nombre ){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log(cookieArr);

    for( var i=0; i < cookieArr.length; i++){
        var parArr = cookieArr[i].split("=")
        cookieArr[i]= parArr;
        if(parArr[0] === nombre){
            return unescape(parArr[1])
        }
    }
    console.log(cookieArr)
    return undefined;
}

// function borrarCookie(nombre){

// }

crearCookie("nombre","Fernando");
crearCookie("apellido","Lopez");

// borrarCookie("nombre");
console.log(getCookie("apellido"));
//  var cookies = document.cookie;
//  console.log(cookies);


