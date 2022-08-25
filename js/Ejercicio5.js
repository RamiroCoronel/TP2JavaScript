// ingresar un numero de dni
// el numero debe estar entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// switch donde las opciones son 0 a 22, mostrar por pantalla (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// repertir el proceso hasta que el usuario presione cancelar.

let dni = parseInt(prompt("ingrese un dni a y 99999999"));
console.log(dni)

if(dni >= 0 && dni <= 99999999){
//calculo todo lo del dni
let resultado = dni % 23;
console.log(resultado);
switch(resultado){
        case 0:
        document.write("T");
        alert("T")
        break;
        case 1:
        document.write("R");
        alert("R")
        break;
        case 2:
        document.write("W");
        alert("W")
        break;
        case 3:
        document.write("A");
        alert("A")
        break;
        case 4:
        document.write("G");
        alert("G")
        break;
        case 5:
        document.write("M");
        alert("M")
        break;
        case 6:
        document.write("Y");
        alert("Y")
        break;
        case 7:
        document.write("F");
        alert("F")
        break;
        case 8:
        document.write("P");
        alert("P")
        break;
        case 9:
        document.write("D");
        alert("D")
        break;
        case 10:
        document.write("X");
        alert("X")
        break;
        case 11:
        document.write("B");
        alert("B")
        break;
        case 12:
        document.write("N");
        alert("N")
        break;
        case 13:
        document.write("J");
        alert("J")
        break;
        case 14:
        document.write("Z");
        alert("Z")
        break;
        case 15:
        document.write("S");
        alert("S")
        break;
        case 16:
        document.write("Q");
        alert("Q")
        break;
        case 17:
        document.write("V");
        alert("V")
        break; 
        case 18:
        document.write("H");
        alert("H")
        break; 
        case 19:
        document.write("L");
        alert("L")
        break; 
        case 20:
        document.write("C");
        alert("C")
        break; 
        case 21:
        document.write("K");
        alert("K")
        break; 
        case 22:
        document.write("E");
        alert("E")
        break; 
        default:
            alert("valor erroneo")
}
}else{
    alert("ingreso un valor erroneo")
}