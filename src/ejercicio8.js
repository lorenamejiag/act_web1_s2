let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21; 
let descuentoPorcentaje = 0; 
let precioFinal;

if (edad < 18) {
    descuentoPorcentaje = 0.20;
} else if (edad >= 65) {
    descuentoPorcentaje = 0.40; 
}
precioFinal = tarifaBase * (1 - descuentoPorcentaje);

precioFinal = parseFloat(precioFinal.toFixed(2));

console.log(precioFinal);
