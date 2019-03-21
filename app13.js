var arr = [
    true,
    false,
    true,
    {
        nombre: "julio",
        apellido: "lopez"
    },
    function(){
        console.log("estoy en un arreglo")
    },
    function( persona ){
        console.log(persona.nombre + " "+ persona.apellido)
    },
    [
        "Julio",
        "Jose",
        "Lopez",
        "Aldazoro",
        [
            "kristina",
            function(){
                console.log(this);
            }
        ]
    ]

];

console.log( arr )

arr[4]();

arr[5](arr[3]);

console.log(arr[6][4][0]);
arr[6][4][1]();