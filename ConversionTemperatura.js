const prompt = require('prompt-sync')();

function solicitarTemperatura(){
    let temperatura = prompt("Ingresa la temperatura en grados Celsius (Usa punto para el decimal):");
    
    if (isNaN(temperatura) || temperatura.trim() === "") {
        return solicitarTemperatura();
    } else {
        let temperaturaNumerica = parseFloat(temperatura);
        return temperaturaNumerica;
    }
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusAKelvin(celsius) {
    return celsius + 273.15;
}

let result = solicitarTemperatura();
console.log("Grados Kelvin: " + celsiusAKelvin(result));
console.log("Grados Fahrenheit: " + celsiusAFahrenheit(result));
