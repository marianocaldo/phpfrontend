console.log("eventos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const botonResumen = document.getElementById("btn-resumen");
const botonBorrar = document.getElementById("btn-borrar");
const optGeneral = document.getElementById("cantGeneral");
const optTrainee = document.getElementById("cantTrainee");
const optEstudiante = document.getElementById("cantEstudiante");
const optJunior = document.getElementById("cantJunior");

const TOTAL = document.getElementById("TOTAL");

var totaltotal, totGeneral, totEstudiante, totTrainee, totJunior = 0;


//nombre.value = "no";

console.log(nombre.value.length);

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "";
    }
}



function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorEmail").innerHTML = "El email no es válido"
    } else {
        document.getElementById("errorEmail").innerHTML = ""
    }
}

function completarGeneral() {
    totGeneral = (optGeneral.value * 200);
    document.getElementById("subtotGeneral").innerHTML = "$" + totGeneral; 
    
}



function completarEstudiante() {
    totEstudiante = optEstudiante.value * 40;
    document.getElementById("subtotEstudiante").innerHTML = "$" + totEstudiante; 
    console.log(optEstudiante);

}


function completarTrainee() {
    totTrainee = optTrainee.value * 100;
    document.getElementById("subtotTrainee").innerHTML = "$" + totTrainee; 
    console.log(optTrainee);

}

 

function completarJunior() {
    totJunior = optJunior.value * 170;
    document.getElementById("subtotJunior").innerHTML = "$ " + totJunior;
    
    console.log(optJunior);

} 


function completarTotal() {
    totaltotal= totGeneral + totEstudiante + totJunior + totTrainee;
    
    document.getElementById("TOTAL").innerHTML = "$ " + totaltotal; 
     

}

function resetValues() {
    
    document.getElementById("TOTAL").innerHTML = "$ 0";
    document.getElementById("nombre").innerHTML = " ";
    apellido.value = "";
    nombre.value = "";
    email.value = "";
    document.getElementById("subtotJunior").innerHTML = "$0";
    document.getElementById("subtotTrainee").innerHTML = "$0";
    document.getElementById("subtotEstudiante").innerHTML = "$0";
    document.getElementById("subtotGeneral").innerHTML = "$0";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorNombre").innerHTML = "";
    document.getElementById("errorApellido").innerHTML = "";
    document.getElementById("cantGeneral").value = "0";
    document.getElementById("cantEstudiante").value = "0";
    document.getElementById("cantTrainee").value = "0";
    document.getElementById("cantJunior").value = "0";
  }


botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);


botonResumen.addEventListener("click", completarGeneral);
console.log()
botonResumen.addEventListener("click", completarEstudiante);
botonResumen.addEventListener("click", completarTrainee);
botonResumen.addEventListener("click", completarJunior);



botonResumen.addEventListener("click", completarTotal);

botonBorrar.addEventListener("click", resetValues);

// botonResumen.addEventListener("click", completarTotal);


/*
perro
atributos: color, tamaño, peso, altura
acciones: ladrar(), moverLaCola(), comer()

perro {
    color: negro;
    tamaño: mediano;

    function ladrar() {
        console.log("Guau guau");
    }

    function comer() {

    }
}




console.log(perro.color);  //negro
perro.ladrar(Guau guau);    //método
*/

