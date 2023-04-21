let personajeA = {
    nombre: "A",
    vida: 30,
    ataque: 1
}

let personajeB = {
    nombre: "B",
    vida: 30,
    ataque: 1
}

while(personajeA.vida > 0 && personajeB.vida > 0){
    console.log(personajeA.vida);
    console.log(personajeB.vida);
    personajeA.vida-=personajeB.ataque;
    personajeB.vida-=personajeA.ataque;
}

console.log(personajeA);
console.log(personajeB);

