// produccion de una fabrica
// 250 piezas / hora
// jornada de 8hrs
// Calcular total de piezas fabricadas, cuantas cajas de 12 piezas se llenan, cuantas piezas quedan sueltas en una jornada

// produccion de piezas/hora
const prodHora = 250;

// jornada de trabajo
const horas = 8;

// piezas / caja
const caja = 12;

// total de piezas / jornada
let pcsJornada = prodHora * horas;

// cuantas cajas de 12 quedan llenas:
let cajasLlenas = pcsJornada / caja;

// piezas que quedan sueltas:
let pcsSueltas = pcsJornada % caja;

// explayar en pantalla:
console.log(`Piezas producidas por hora: ${prodHora}`);
console.log(`Piezas producidas por jornada: ${pcsJornada}`);
console.log(`Piezas que caben en una caja: ${caja}`);
console.log(`Cajas producidas por jornada: ${cajasLlenas}`);
console.log(`Piezas sueltas por jornada: ${pcsSueltas}`);