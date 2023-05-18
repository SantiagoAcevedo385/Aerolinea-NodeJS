
const formulario = document.querySelector('#form');
    formulario.addEventListener('submit', (validar) => {
        validar.preventDefault(); 

    let hoy = new Date()
    fecha1 = new Date(document.querySelector('#fecha1').value);
    fecha2 = new Date(document.querySelector('#fecha2').value);

    if (fecha1 < hoy){
        alert('Por favor escriba una fecha mayor a la fecha de Colombia en departing y returning');
    }else if(fecha1 > fecha2){
        alert('La fecha de departing debe ser menor a la fecha de returning');
    }else{
        alert('Se mostraran todos los vuelos'), window.open('https://www.avianca.com/co/es/?msclkid=ff60732a6f3210f17168174e97fa71ec&utm_source=bing&utm_medium=cpc&utm_campaign=BS%3Aes-CO_BR%5CCore%2FGeo@BOG-G12300851963&utm_term=avianca&utm_content=BS%3Aes-CO_BR%5CCore%3DAV%2FEX@Avianca')
    }
})