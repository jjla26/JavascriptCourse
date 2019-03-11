
var persona = {
    nombre: "Julio",
    apellido: "Lopez",
    imprimirNombre: function(){
        console.log(this.nombre + " " + this.apellido)
    },
    direccion: {
        pais: "Venezuela",
        calle: function(){

            var self = this;
            var nuevaDireccion= function(){
                console.log( self );
                console.log("La direccion es en " + self.pais)

            }
            nuevaDireccion();
        }
    }
}

var hotel = {
    asd: "asd",
    nombre: function(){
        console.log(this.asd)
    }
}

hotel.nombre();

persona.nombre = "Maria"
persona.direccion.calle();