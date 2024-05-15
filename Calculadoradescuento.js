//definir las variables de para un descuento
let precioOriginal = parseFloat(prompt('Ingresar precio original'));
let porcentajeDescuento = parseFloat(prompt('ingresar el porsentade de descuento'));
let montoDescuento = (precioOriginal * porcentajeDescuento) / 100;
let precioFinal = precioOriginal - montoDescuento;

//definir cual es el resultado
console.log('el precio original es ' + precioOriginal);
console.log('El precio de descuento es ' + porcentajeDescuento);
console.log('el monto de descuento es ' + montoDescuento);
console.log('el precio final es ' + precioFinal);