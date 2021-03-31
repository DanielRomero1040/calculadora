//insertar numero
let uno = document.getElementById('uno'),
    dos = document.getElementById('dos'),
    tres = document.getElementById('tres'),
    cuatro = document.getElementById('cuatro'),
    cinco = document.getElementById('cinco'),
    seis = document.getElementById('seis'),
    siete = document.getElementById('siete'),
    ocho = document.getElementById('ocho'),
    nueve = document.getElementById('nueve'),
    cero = document.getElementById('cero'),
    borrar = document.getElementById('borrar'),
    igual = document.getElementById('igual'),
    sumar = document.getElementById('sumar'),
    restar = document.getElementById('restar'),
    multiplicar = document.getElementById('multiplicar'),
    dividir = document.getElementById('dividir'),
    coma = document.getElementById('coma'),
    pantalla = document.getElementById('pantalla'),
    operando1,
    operando2,
    operacion;


//eventos
uno.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'1';
}
dos.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'2';
}
tres.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'3';
}
cuatro.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'4';
}
cinco.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'5';
}
seis.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'6';
}
siete.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'7';
}
ocho.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'8';
}
nueve.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'9';
}
cero.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'0';
}
borrar.onclick = function(e){
    resetear();
}
coma.onclick = function(e){
    pantalla.textContent = pantalla.textContent +'.';
}
sumar.onclick = function(e){
    operando1 = pantalla.textContent;
    operacion = "+";
    limpiar();    
}
restar.onclick = function(e){
    operando1 = pantalla.textContent;
    operacion = "-";
    limpiar();    
}
multiplicar.onclick = function(e){
    operando1 = pantalla.textContent;
    operacion = "*";
    limpiar();    
}
dividir.onclick = function(e){
    operando1 = pantalla.textContent;
    operacion = "/";
    limpiar();    
}
igual.onclick = function(e){
    operando2 = pantalla.textContent;
    resolver();
}

function limpiar(){
    pantalla.textContent = '';
}
function resetear(){
    pantalla.textContent = '';
    opeando1 = 0;
    operando2 = 0;
    operacion = '';
}
function resolver(){

    let resultado = 0;
    if (operacion === '+'){
        resultado = parseFloat(operando1) + parseFloat(operando2);
    }
    else if (operacion === '-'){
        resultado = parseFloat(operando1) - parseFloat(operando2);
    }

    else if (operacion === '*'){
        resultado = parseFloat(operando1) * parseFloat(operando2);
    }
    else if (operacion === '/'){
        resultado = parseFloat(operando1) / parseFloat(operando2);
    }
    else{
        alert("hola")
    };
    resetear();
    pantalla.textContent = resultado;
}


