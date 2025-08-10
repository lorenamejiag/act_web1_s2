let numeroMidi;
let nota = 'LA'
switch (nota.toUpperCase()) {
    case 'DO':
        numeroMidi = 60;
        break;
    case 'RE':
        numeroMidi = 62;
        break;
    case 'MI':
        numeroMidi = 64;
        break;
    case 'FA':
        numeroMidi = 65;
        break;
    case 'SOL':
        numeroMidi = 67;
        break;
    case 'LA':
        numeroMidi = 69;
        break;
    case 'SI':
        numeroMidi = 71;
        break;
    default:
        numeroMidi = "nota desconocida";
}

console.log(numeroMidi);
