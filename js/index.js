const temperatura2 = document.getElementById("temperatura");
const escala2 = document.getElementById("grados");
const parrafo = document.getElementById("mostrar");
const boton = document.getElementById("boton");
//? este evento solo funciona al hacer click en el boton
boton.addEventListener("click", calcularEscala);

function calcularEscala(){ 
    //? en estas variables se aguarda solo el valor que esta adentro
    const temperatura = temperatura2.value;
    const escala = escala2.value;
    //? Comprueba si se ingresa un valor que no sea numerico
    if (isNaN(parseFloat(temperatura))) {
        parrafo.textContent = "La temperatura ingresada no es válida.";
        return;
    }
    //? Hace la conversion segun el usuario lo pida
    if(escala.toLowerCase() ==="f"){
            const farenheit = (1.8 * parseFloat(temperatura)) + 32;
            return parrafo.textContent = "La temperatura en Farenheit es: " + farenheit;
        }else if(escala.toLowerCase() === "c"){
            const celcius = (parseFloat(temperatura) - 32) /1.8;
            return parrafo.textContent = "La temperatura en Celsius es: " + celcius;
        }else if(escala.toLowerCase() ==="k"){
            const kelvin = parseFloat(temperatura) + 273.15 ;
            return parrafo.textContent = "La temperatura en Kelvin es: " + kelvin;
        }else{
            return parrafo.textContent = "Dato no valido";
        }
}
