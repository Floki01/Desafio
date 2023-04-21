let personajeA = {
    nombre: "A",
    vida: 30,
    ataque: 2
}

let personajeB = {
    nombre: "B",
    vida: 30,
    ataque: 10
}

while(personajeA.vida > 0 && personajeB.vida > 0){
    console.log(personajeA.vida +" "+personajeB.vida);
    personajeA.vida=-personajeB.ataque;
    personajeB.vida=-personajeA.ataque;
}

console.log(personajeA);
console.log(personajeB);

