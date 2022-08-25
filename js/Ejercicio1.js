//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje

let edad = parseInt(prompt("Por favor ingrese su edad"));

if (!isNaN(edad)) {
    if (edad >= 18) {
        document.write("Puedes conducir");
    }else{
        document.write("No tiene edad para conducir")
    }
}else {
    alert("introduce un numero valido")
}


