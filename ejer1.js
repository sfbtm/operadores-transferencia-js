// Calculadora que calcula gastos ya predefinidos

// objeto de gastos, cada clave es el gasto y el valor es la plata del gasto
const gastos = {
    transporte: 120000,
    alojamiento: 200000,
    alimentacion: 150000
}

// contador total. Se usa para calcular el total con un forEach
let total = 0;

// Object.values(gastos) devuelve un array con el valor de cada gasto el cual es iterado por forEach
Object.values(gastos).forEach(dinero => {
    total = total + dinero; //dinero = valor. Se calcula acumulativamente en total
})

// La parte que le corresponde a cada uno:
const division = total/4;

// cantidad de personas
const personas = 3;

// aporte que hace cada uno
let aporte = 130000;

// el total del aporte que hacen los 3
const totalAporte = aporte * personas;

// Lo que sobra del total de los aportes y lo que debian poner cada uno
let sobrante = total - aporte;

// explayar en pantalla
console.log(`Total de los gastos: ${total}`);
console.log(`Parte de cada uno: ${division}`);
console.log(`Aporte hecho por cada uno: ${aporte}`);
console.log(`El total de los aportes: ${totalAporte}`);
console.log(`Sobrante entre los aportes de todos y el total del los gastos: ${sobrante}`)