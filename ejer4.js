// aprendiz que debe calcular notas
// notas obtenidas: 4.5, 3.8, 2.9, 4.0
// calcular suma total, promedio
// calcular resultado de (nota1 + nota2) * (nota3 + nota4) / 2

// notas del aprendiz:
const nota1 = 4.5;
const nota2 = 3.8;
const nota3 = 2.9;
const nota4 = 4.0;

// suma total
let suma = nota1 + nota2 + nota3 + nota4;

// promedio
let promedio = suma / 4;

// resultado de la operacion
let operacion = (nota1 + nota2) * (nota3 + nota4) / 2;

//explayar en pantalla
console.log(`notas del aprendiz: 
    nota1: ${nota1}
    nota2: ${nota2}
    nota3: ${nota3}
    nota4: ${nota4}
    `)
console.log(`suma total de las notas: ${suma}`)
console.log(`Resultado de la operacion (nota1 + nota2) * (nota3 + nota4) / 2: ${operacion}` )
console.log(`promedio: ${promedio}`)