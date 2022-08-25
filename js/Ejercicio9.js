// escribir numero del 1 al 500
// tengo que saber de los numeros es multiplo de 4 y de 9
// cada 5 lineas poner un hr

let numero = 1;

//bucle que muestre 1 numero varias veces

for(let indice =1; indice <= 500; indice++){   
    document.write(indice);
    //preguntar si es multiplo de 4
    if( indice % 4 === 0){
        document.write(" Es multiplo de 4");
    }
    if( indice % 9 === 0){
        document.write(" Es multiplo de 9");
    }
    document.write("<br>");
    //mostrar una linea
    if( indice % 5 === 0 ){
        document.write("<hr>")
    }

}