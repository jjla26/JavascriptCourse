function Persona(){
    this.nombre = "Juan";
    this.apellido ="Mendoza";
    this.edad = 30;

    this.nombreCompleto = function(){
        return this.nombre+" "+this.apellido;
    }
}

var juan = new Persona();

console.log(juan)
console.log(juan.nombre)
console.log(juan.nombreCompleto())