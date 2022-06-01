let number = 20;
let number2 = 15;

if (number<20){
    console.log("Die Zahl ist kleiner als 20.")
    console.log("Die Zahl", number, "ist kleiner als 20.")
}

if (number<=20){
    console.log("Die Zahl ist kleiner als oder gleich  20.")
    console.log("Die Zahl", number, "ist kleiner als oder gleich 20.")
}

if (number2!=20){
    console.log("Die Zahl", number2, "ist nicht 20.")
}

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"
let numero = 60;

if (numero<20){
    console.log("mini");
}
else if(numero >=20 && numero<=50){
    console.log("medium");
}
else if(numero>50){
    console.log("large");
}

// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"

if (numero<=7){
    console.log("mini");
}
else if(numero >7 && numero<=90){
    console.log("medium");
}
else if(numero>90){
    console.log("large");
}
