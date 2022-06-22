let random = Math.random() * 1000;
let randomAsInt = Math.round(random);
console.log(randomAsInt);

// Wenn größer zwischen 800
// Wenn zws. 500 & 800
// Wenn zws. 200 & 500
// Wenn zws. 0 & 200
if(randomAsInt > 800){
    console.log("Die Zahl ist größer als 800");
}
else if (randomAsInt < 500 && randomAsInt > 200){
    console.log("Der Wert der Zahl liegt zwischen 200 und 500");
}
else if (randomAsInt < 800 && randomAsInt > 500){
    console.log("Der Wert der Zahl liegt zwischen 500 und 800");
}
else if (randomAsInt < 200){
    console.log("Die Zahl ist kleiner als 200");
}