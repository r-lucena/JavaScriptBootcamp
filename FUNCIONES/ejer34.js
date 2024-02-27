/**
 * Siguiendo con el código, queremos que la variable sport sea una variable 'global'. ¿Qué definición podemos adoptar?

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
  }

  console.log(personName + sport);
}

canPlay();
 */

let sport;

function canPlay() {
    sport = " Football";
    let personName;
    
    if (true) {
        personName = "Cosimo";
    }
     console.log(personName + sport);
    }
    
    canPlay()