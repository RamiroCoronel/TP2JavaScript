// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let vocales = ["a", "e", "i", "o", "u"];
let texto = prompt("Ingrese una frase");

let textoMinisculas = texto.toLowerCase();

let stop = false;

for (let i = 0; i < textoMinisculas.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (vocales[j] === textoMinisculas.charAt(i)) {
      posicion = i;
      stop = true;
      break;
    }
  }

  if (stop) {
    break;
  }
}
if(stop!= true){
  document.write(`La palabra ingresada no tiene vocales` );
}else{
  document.write(`La primera vocal '${textoMinisculas.charAt(posicion)}' está en la posición ${posicion}` );
}