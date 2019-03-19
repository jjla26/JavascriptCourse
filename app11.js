function identifica( param ){

    console.log( param instanceof Persona)
    if ( typeof param == "function"){
        param();

    }else{
        console.log(param);
    }

}

function Persona(){
    
}

var juan = new Persona()

identifica(juan);
identifica("1");
identifica(1);
identifica(function(){console.log("soy anonima")});