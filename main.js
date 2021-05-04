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
    historialContenedor = document.getElementById('historial-contenedor'),
    contenedorModal = document.getElementsByClassName('modal-container')[0],
    historico = document.getElementById('historial'),
    botonCerrar = document.getElementById('cerrar'),
    modalHistorico = document.getElementsByClassName('modal-historial')[0],
    acumuladorHistorial = '',
    resultado = 0,
    operando1,
    operando2,
    operacion;
const historial = [];

//eventos
uno.addEventListener('click', () => {
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'1';
})
dos.addEventListener('click', () => {
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'2';
})
tres.addEventListener('click', () => {
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'3';
})
cuatro.onclick = function(e){
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'4';
}
cinco.addEventListener('click', () => {
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'5';
})
seis.onclick = function(e){
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'6';
}
siete.onclick = function(e){
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'7';
}
ocho.onclick = function(e){
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'8';
}
nueve.onclick = function(e){
    limpiarDespuesDeResolver()
    pantalla.textContent = pantalla.textContent +'9';
}
cero.onclick = function(e){
    limpiarDespuesDeResolver()
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

historico.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
    showHistory()
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.remove('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})

let showHistory = ()=>{
    historial.forEach( element => {
        acumuladorHistorial += `<p ml-2>${element}</p>`
    })
    document.getElementById('historial-contenedor').innerHTML = acumuladorHistorial;
};

let limpiar = () => {
    pantalla.textContent = '';
};

let limpiarDespuesDeResolver =()=>{
    if (resultado !== 0){
        pantalla.textContent = '';
    }
}

let resetear = () => {    
    pantalla.textContent = '';
    opeando1 = 0;
    operando2 = 0;
    operacion = '';
};
let resolver = () => {    
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
        resultado = '0';
    };
    historial.push(resultado);
    historialenLocal = localStorage.setItem('historial', JSON.stringify(historial))
    //resetear();
    pantalla.textContent = resultado;
};

let iniciarHistorial = () => {
    historialenLocal = JSON.parse(localStorage.getItem('historial'));  
    if (historialenLocal){
        let continuarOperando = prompt("Desea Continuar con el historico guardado?");
      if (continuarOperando == "si"){        
        historialenLocal.forEach(element => { acumuladorHistorial += `<p ml-2>${element}</p>`     
        });
        document.getElementById('historial-contenedor').innerHTML = acumuladorHistorial;
        historial = historialenLocal;             
      }else{
        localStorage.removeItem('historial');
        historial = [];
      }
    }
};

iniciarHistorial();



