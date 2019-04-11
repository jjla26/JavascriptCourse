/*Error managment */

try{

    //throw is just forcing the catch
    // var a = 100;
    // if(a === 100){
    //     throw 'que mal';
    // }else{
    //     throw 'oh oh!';

    // }

    // throw new Error('Error tipo 1')
    // throw{
    //     nombre: "error",
    //     accion:"correr",
    //     code:1
    // }

    throw function(){
        console.log("function del throw")
    }
    
    console.log("El valor de a es:",a)
}

catch(e){
    e();
    // console.log(e.nombre)
    // console.log(e.accion)
    // console.log(e.code)
    // console.log("Error de catch",e.message)
    
}

finally{
    console.log("Finalmente")
}