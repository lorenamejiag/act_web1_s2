const edad = 15;
let clasificacion; 

if (edad >- 0 && edad <= 12) {
    clasificacion = "niño";
} else if (edad >= 13 && edad <= 17) {
    clasificacion = "adolescente";
} else if (edad >= 18 && edad <= 64) {
    clasificacion = "adulto";
} else if (edad >= 65) {
    clasificacion = "anciano";
} else {
    clasificacion = "edad inválida";
}

console.log(clasificacion);
