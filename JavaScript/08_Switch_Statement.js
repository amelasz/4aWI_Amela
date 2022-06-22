// Erstelle eine Zufallszahl zwischen 5 und 10

let random = Math.random() * (10 - 5 + 1) + 5;
let randomAsInt = Math.round(random);

// Wenn der Wert 10 ist gib aus Zehn
// Wenn der Wert 9 ist gib aus Neun
// Wenn der Wert 8 ist gib aus Acht
// etc.

switch (randomAsInt) {
    case 10:
        randomAsInt = 10;
        console.log("Zehn");
        break;
    case 9:
        randomAsInt = 9;
        console.log("Neun");
        break;
    case 8:
        randomAsInt = 8;
        console.log("Acht");
        break;
    case 7:
        randomAsInt = 7;
        console.log("Sieben");
        break;
    case 6:
        randomAsInt = 6;
        console.log("Sechs");
        break;
    case 5:
        randomAsInt = 5;
        console.log("Fünf");
        break;
    case 4:
        randomAsInt = 4;
        console.log("Vier");
        break;
    case 3:
        randomAsInt = 3;
        console.log("Drei");
        break;
    case 2:
        randomAsInt = 2;
        console.log("Zwei");
        break;
    case 1:
        randomAsInt = 1;
        console.log("Eins");
        break;
    case 0:
        randomAsInt = 0;
        console.log("Null");
}