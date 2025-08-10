const nota = 83;
let calificacionLetra;

switch (true) {
    case nota >= 90 && nota <= 100:
        calificacionLetra = "A";
        break;
    case nota >= 80 && nota <= 89:
        calificacionLetra = "B";
        break;
    case nota >= 70 && nota <= 79:
        calificacionLetra = "C";
        break;
    case nota >= 60 && nota <= 69:
        calificacionLetra = "D";
        break;
    case nota >= 0 && nota < 60:
        calificacionLetra = "F";
        break;
    default:
        calificacionLetra = "Nota inválida";
}

console.log(calificacionLetra);