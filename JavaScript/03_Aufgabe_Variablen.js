// Erstelle eine Variable banana mit dem Wert "Banane"

let banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple"

let apple = "Apfel";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14

let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo

let AvgAppleWeight = 0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let AvgBananaWeight = 0.22

// Gib folgendes aus: 
// Anzahl Bananen/Äpfel pro Kilo,

let bananastk = 1/AvgBananaWeight;
let applestk = 1/AvgAppleWeight;

console.log("1kg Bananen entsprechen", bananastk, "Stück");
console.log("1kg Äpfel entsprechen", applestk, "Stück");

// Gib folgendes aus: 
// Preis pro Banane/Apfel

let bananaprice = bananaPricePerKilo / bananastk;
let appleprice = applePricePerKilo / bananastk;

console.log("Der Preis von einer Banane beträgt: " + bananaprice + "€.");
console.log("Der Preis von einem Apfel beträgt: " + appleprice + "€.");

// Preis von 8 Äpfeln

let result = appleprice * 8;

console.log("Der Preis von 8 Äpfeln beträgt: " +  result + "€.");

// Preis von 17 Bananen

result = bananaprice * 17;

console.log("Der Preis von 17 Bananen beträgt: " +  result + "€.");

// Preis von 1 Tonne Äpfel

result = applePricePerKilo * 1000;

console.log("Der Preis von einer Tonne Äpfeln beträgt: " + result + "€.");

// Preis von 1 Tonne Bananen

result = bananaPricePerKilo * 1000;

console.log("Der Preis von einer Tonne Bananen beträgt: " + result + "€.");