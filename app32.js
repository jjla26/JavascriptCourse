//Events

function presionar(arg){
    console.log("asd");
    console.log(arg.x, arg.y);
}

var objeto = document.getElementById("texto")
objeto.addEventListener("click",presionar)
console.log(objeto)