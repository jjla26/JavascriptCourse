//var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Holaa Mundoo, 12345\nHola ú "
var texto1 = "Aeropuerto"
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

console.log(texto1.match( /[aeiou]{2,}/ig ));

var texto2 = "asdkljsa asdjasdkl alkdjsajkl 60 + 40 = 123"

console.log(texto1.match( /\w{2,}/ig ));

console.log(texto2.match( /\d{1,}/g ))

//Mozilla regular expression!






