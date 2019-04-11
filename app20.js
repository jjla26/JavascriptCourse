//var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Holaa Mundoo, 12345\nHola ú "

console.log(texto.match( reg2 ));
console.log(texto.match( /^H/ ));
console.log(texto.match( /.$/ ));
console.log(texto.match( /.../ ));
console.log(texto.match( /^.o/ ));
console.log(texto.match( /[0-9]/ ));
console.log(texto.match( /[a-zA-Z]/ ));
console.log(texto.match( /^H[a-z]/ ));
console.log(texto.match( / / ));
console.log(texto.match( /\s/ )); // any separation
console.log(texto.match( /\w/ )); //any letter and number
console.log(texto.match( /\d/ )); // any number
console.log(texto.match( /m/i )); // i (no case sensitive) g (Every appearance) m (multi-line)
console.log(texto.match( /[AEIuo]|ú/igm));
console.log(texto.match( /o+/g ));
console.log(texto.match( /o?/g ));
console.log(texto.match( /o*/g ));
console.log(texto.match( /o{2,}/g ));







