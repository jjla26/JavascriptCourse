//prototipos

function Persona(){
    this.nombre = "Julio";
    this.apellido = "Lopez";
    this.edad = 30;
    this.pais = "Venezuela"
}

Persona.prototype.imprimirInfo = function(){
    console.log( this.nombre + " " + this.apellido +"("+this.edad+")")
}

var julio = new Persona();

julio.imprimirInfo();



var a = "Julio";

Number.prototype.esPositivo = function(){
    if( this >0){
        return true;
    }else{
        return false;
    }
}





