
function determinaDato( a ){

    if(a === undefined){
        console.log("a es undefined");
    }

    if(typeof a === "number"){
        console.log("a es un numero")
    }

    if(typeof a === "string"){
        console.log("a es un string")
    }
    if(typeof a === "object"){
        console.log("a es un objeto")
        if(a instanceof Number){
            console.log("A es un objeto numerico")
        }
    }

}

determinaDato({});

var b = new Number(3)
console.log(b);
determinaDato(b);