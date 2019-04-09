//numeric object

var a = 10.1234567890;
var b = new Number(10);

console.log(a.toFixed(2));

console.log(a.toPrecision(4))

a = a.toString(a);
console.log(a);

//boolean object

var c = true;
var d = false;

var e = new Boolean();
console.log(e);

if (e){
    console.log("hola");
}

//string object

var k = new String("Julio");
var l = "lopez"
console.log( k );

console.log(k.toUpperCase());
console.log(k.toLowerCase());

var m = k.indexOf("i")
var m = k.lastIndexOf("i")
var nombre = k.substr(0,k.indexOf("i"));
console.log(nombre)
var k = "Julio Lopez"
var split = k.split(" ");
console.log(split);


