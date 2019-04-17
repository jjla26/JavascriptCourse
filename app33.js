//RIGHT CLICK BLOCK

window.onload = function(){
 
    document.addEventListener('mousedown',function(arg){
        if(arg.button == 2){
                alert('prohibido')
            }else{
                console.log('ok')
            }
    
    })

    document.addEventListener('mouseup',function(arg){

        var texto = window.getSelection().toString()
        console.log(texto)
    })

}
    
;
//ON SUBMIT

function validar(){

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    if (nombre.length < 1){
        return false;
    }
    if (email.length <1){
        return false;
    }

    return true;
}
