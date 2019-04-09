var PI = Math.PI
var E = Math.E
console.log(Math.round(PI*1000)/1000)
console.log(Math.floor(PI*1000)/1000)

var rand = Math.random()

console.log(rand)

function randomEntre(min,max){
    return Math.floor( Math.random() * (max-min+1) + min)

}

console.log(randomEntre(1,10))

console.log(Math.sqrt(16))
console.log(Math.pow(2,2));