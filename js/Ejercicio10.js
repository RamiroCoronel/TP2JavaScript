//Pedir un numero de filas y columnas
//dibujar una tabla
//cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese numero de filas"));
let columnas = parseInt(prompt("Ingrese numero de columnas"));
let resultado = filas * columnas;

console.log(filas)
console.log(columnas)

document.write(`<table class="tablaDatos"><tbody>`);
//aqui tengo que dibujar las filas
for(let indiceFila = 0; indiceFila < filas; indiceFila++){ 
document.write(`<tr>`)
//aqui dibujo las columnas seleccionadas por el usuario
for(let indiceColumna = 0; indiceColumna < columnas; indiceColumna++){
    document.write(`<td>${resultado}</td>`);
    resultado--; //resultado + resultado -1;
}
    
    document.write(`</tr>`)
}
document.write(`</tbody></table>`);