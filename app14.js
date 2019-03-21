
var arguments = 10;

function miFunction(a,b,c,d){
    if( arguments.length !== 4){
        console.log("la funcion neesita 4 params")
        return;
    }
   // console.log(arguments);
    console.log(a+b+c+d)
}

//miFunction(10,20,30,40,{},function(){});
miFunction(10,20,30,40);
