var nota = 60;
var nota2= 80;
var d = undefined;
if( nota >80){
    console.log("Excelente")
}else if ( nota > 60){
    console.log("Aprobo")
}else if ( nota > 30){
    console.log("Mal")

}


else{
    console.log("Reprobo")
}

var c = (nota > nota2)? function(){
    console.log( nota, "es mayor que:", nota2)
}() : function(){
    console.log( nota2, "es mayor que:", nota)
}();

console.log(c)

var e = d || nota;

console.log(e)