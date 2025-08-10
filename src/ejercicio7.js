let precioUnitario = 25;
let cantidad = 60;
let precioFinal;

let total = precioUnitario * cantidad;

if (cantidad < 10) {
  precioFinal = total; 
} else if (cantidad >= 10 && cantidad < 50) {
  precioFinal = total * 0.9;
} else {
  precioFinal = total * 0.8; 
}


console.log(precioFinal.toFixed(2));