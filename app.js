let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//es para los ids getElementById
  
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `ACERTASTE EL NÚMERO EN ${intentos} ${(intentos === 1) ? 'VEZ' : 'VECES'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //CUANDO EL USUARIO NO ACIERTA
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'EL NÚMERO SECRETO ES MENOR');
        } else{
        asignarTextoElemento('p', 'EL NÚMERO SECRETO ES MAYOR');
        }
        intentos += 1;   
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''; //obtener el valor por id a través del querySelector
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'TODOS LOS NÚMEROS FUERON SORTEADOS');
    } else{
        //Si el número generado está en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
asignarTextoElemento('h1', 'JUEGO DEL NÚMERO SECRETO');
asignarTextoElemento('p', `INDICA UN NÚMERO DEL 1 AL ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}

function reiniciarJuego(){
    //LIMPIAR LA CAJA
    limpiarCaja();
    //INDICAR MENSAJE DE INTERVALO DE NÚMEROS
    //GENERAR EL NÚMERO ALEATORIO
    //INICIALIZAR EL NÚMERO DE INTENTOS  
    condicionesIniciales();
    //DESABILITAR EL BOTON DE NUEVO JUEGO
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();