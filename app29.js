

for(var i = 0; i <= 10; i++){
    console.log(i);
}

var Persona = function(){
    this.nombre ="Juan";
    this.apellido = "Lopez";
    this.edad="30";
}

var juan = new Persona();

Persona.prototype.direccion="San Jose"

for (prop in juan){ //refletion

    console.log( juan.hasOwnProperty(prop))
    if (!juan.hasOwnProperty(prop) )
    continue; 

    console.log(prop, ":", juan[prop])
}

[1,2,3,4,5,6,7,8,9].forEach(function(val){
    console.log(val)
})