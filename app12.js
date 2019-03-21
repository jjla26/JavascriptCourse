var arr = [5,4,3,2,1];

console.log(arr.length);

console.log(arr.reverse());

arr = arr.map( function(elem){
    elem *= elem;
    return elem;
});

console.log(arr)

arr = arr.map( Math.sqrt ) ;
console.log(arr);

arr = arr.join("");
console.log( arr );

arr = arr.split("");
console.log( arr ); 

arr.push("6");
console.log( arr );

arr.unshift("0");
console.log(arr);

console.log(arr.toString());

var elimine = arr.pop();
console.log(arr,elimine)

arr.splice(1, 1, "10"); //second paramaters how many elements after the position will delete
console.log(arr)

arr = arr.slice( 0,2); //first and second number means from: to:
console.log(arr)