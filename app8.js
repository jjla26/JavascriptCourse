function Jugador(nombre, hp){
    this.nombre = nombre;
    this.hp = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo){
        if (this.sp >= 20){
            jugadorObjetivo.hp += 20;
            this.sp -= 20;
        }else{
            console.info(this.nombre+"No tiene SP")
        }

        this.estado(jugadorObjetivo);
    }

    this.estado = function(jugador){
        console.log(this);
        console.log(jugador)
    }

    this.tirarFlecha = function( jugadorObjetivo ){
        if (jugadorObjetivo.hp >40 ){
            jugadorObjetivo.hp -=40;
        }else{
            jugadorObjetivo.hp = 0;
            console.error(jugadorObjetivo.nombre+"Murio")

        }
        this.estado(jugadorObjetivo);
    }
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf)
console.log(legolas)

