// //numeric object

// var a = 10.1234567890;
// var b = new Number(10);

// console.log(a.toFixed(2));

// console.log(a.toPrecision(4))

// a = a.toString(a);
// console.log(a);

// //boolean object

// var c = true;
// var d = false;

// var e = new Boolean();
// console.log(e);

// if (e){
//     console.log("hola");
// }

// //string object

// var k = new String("Julio");
// var l = "lopez"
// console.log( k );

// console.log(k.toUpperCase());
// console.log(k.toLowerCase());

// var m = k.indexOf("i")
// var m = k.lastIndexOf("i")
// var nombre = k.substr(0,k.indexOf("i"));
// console.log(nombre)
// var k = "Julio Lopez"
// var split = k.split(" ");
// console.log(split);

 var hoy  = new Date();
// var fMili = new Date(0);
// var fFija = new Date(2016,9, 21, 23, 10,15,1);


// console.log(hoy);
// console.log(fMili);
// console.log(fFija);

// console.log(hoy.getFullYear()+1)
// console.log(hoy.getMonth())

console.log(hoy.getTime());

// for (let i = 0; i < 15000; i++) {
//     console.log("asd")
    
// }

// var fin = new Date();
// var duracion = fin.getTime() - hoy.getTime()
// console.log(duracion/1000)

 var fecha = new Date(2016,9,20)
 console.log(fecha);
// fecha.getDate(32)

 Date.prototype.sumarDias = function(dias){
     this.setDate( this.getDate()+dias );
     return this
 }

 console.log(fecha.sumarDias(5))