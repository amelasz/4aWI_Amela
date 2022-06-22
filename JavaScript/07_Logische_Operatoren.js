// Erstelle zwei Zufallszahlen zwischen 0 und 100
//Erste
let random = Math.random() * 100;
let randomAsInt = Math.round(random);

console.log(randomAsInt);

//Zweite
let random2 = Math.random() * 100;
let randomAsInt2 = Math.round(random2);

console.log(randomAsInt2);


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if(randomAsInt < randomAsInt2 && randomAsInt < 50)
{
    console.log(randomAsInt, "ist kleiner als", randomAsInt2, "und Mini.");
}

// Wenn die erste Zahl kleiner ist als 30 ODER die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"
if(randomAsInt < 30 || randomAsInt2 < 30){
    console.log("Eine der beiden ist kleiner als 30.");
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"
if(randomAsInt < 50 && randomAsInt2 != 50){
    console.log("Erste Zahl klein, zweite Zahl kein 50iger.");
}

//Aufgabe 1)
//Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre 
//oder älter ist oder den Motorradführerschein besitzt,
//aber nicht mehr in der Probezeit ist. 

let alter = 28;
let schein = true;
let probezeit = false;

if(alter >= 24 || (schein == true && probezeit == false)){
    console.log("Die angegebene Person ist dazu berechtigt, mit dem Motorrad zu fahren.");
}
else {
    console.log("Die angegebene Person darf dem Motorad nicht nahe kommen :).");
}

//Aufgabe 2)
//Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist
//oder einen Elternteil mit dabei hat.

let alter2 = 15;
let eltern = true;

if(alter2 >= 14 || eltern == true){
    console.log("Das Kind darf den Kinofilm anschauen.");
}
else{
    console.log("Das Kind darf den Kinofilm nicht anschauen.");
}

//Aufgabe 3)
//Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, 
//muss ich den Coding Campus besucht haben
//oder bereits 2 Jahre Berufserfahrung vorweisen. 

let coding = true;
let beruf = 1;

if(coding == true || beruf >= 2 ){
    console.log("Der Kurs “Softwarearchitekturen” darf besucht werden.");
}
else{
    console.log("Der Kurs “Softwarearchitekturen” darf nicht besucht werden.");
}

//Aufgabe 4)
//Der Bewerber hat eine Chance auf eine Anstellung, 
//wenn er bereits über 5 Jahre Erfahrung vorweist
//oder einen Master Abschluss besitzt und auf jeden Fall 
//eine einwandfreies Leumundszeugnis besitzt.

let beruf2 = 4;
let master = true;
let zeugnis = true;

if(beruf2 >= 5 || (master == true && zeugnis == true)){
    console.log("Der Bewerber hat eine Chance auf eine Anstellung.");
}
else{
    console.log("Der Bewerber hat keine Chance auf eine Anstellung.");
}