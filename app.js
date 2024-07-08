





























let numeroSecretoMaximo = 5;
let numeroSecreto = 0;
let contador = 0;
let listaNumerosYaAleatoriados=[];
condicionesIniciales();

function crearNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroSecretoMaximo)+1;
    if(listaNumerosYaAleatoriados.length == numeroSecretoMaximo){
        asignarElementosDelTexto('p','Ya se asignaron todos los nuemeros posibles a adivinar')
    }else{
        if (listaNumerosYaAleatoriados.includes(numeroGenerado)){
            return crearNumeroSecreto();
        }else{
            listaNumerosYaAleatoriados.push(numeroGenerado);
            console.log(`El numero secreto creado es: ${numeroGenerado},con tipo de dato ${typeof(numeroGenerado)}`)
            console.log(listaNumerosYaAleatoriados);
            return numeroGenerado;
        }
    }
    
}
function verificarIntentoDeUsuario(){
    console.log(`Este es el intento ${contador}`);
    let intentoDeUsuario = parseInt(document.getElementById('valorIngresado').value);
    console.log(`Se hizo click en el boton intentar. El usuario ingreso: ${intentoDeUsuario} como tipo de dato ${typeof(intentoDeUsuario)}`);
    console.log('El numero ingresado por el usuario es igual al numero secreto? ', intentoDeUsuario === numeroSecreto);
    limpiarLaCaja();
    if(intentoDeUsuario === numeroSecreto){
        asignarElementosDelTexto('p', `Acertaste, el numero era ${numeroSecreto}, lo lograste en ${contador} ${ contador == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else{
        asignarElementosDelTexto('p', `Error, el numero secreto es ${intentoDeUsuario < numeroSecreto ? 'mayor' : 'menor'} a ${intentoDeUsuario}`);
        contador++;
    }
    return;
}
function asignarElementosDelTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function limpiarLaCaja(){
    let valorCaja = document.querySelector('#valorIngresado').value = '';
    return;
}

function reiniciarJuego(){
    limpiarLaCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function condicionesIniciales(){
    asignarElementosDelTexto('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarElementosDelTexto('p', `Indica Un Numero Del 1 Al ${numeroSecretoMaximo}`);
    numeroSecreto = crearNumeroSecreto();
    contador = 1;
}


