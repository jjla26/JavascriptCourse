

setTimeout(function(){
console.log("Paso 1 seg")
},2000)

var segundos = 0;

var intervalo = setInterval(function(){
    segundos++;
    console.log(segundos)
    if (segundos === 3){
        clearInterval(segundos);
    }

},2000)


var juan = {
    nombre:"Juan",
    apellido:"Lopez",
    imprimir: function(){
        var self = this;
        setTimeout(function(){
            console.log(self.nombre, self.apellido)
        },1000)
    }


}

juan.imprimir();