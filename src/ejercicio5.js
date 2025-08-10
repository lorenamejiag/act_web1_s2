let dia = 'sabado';

dia = dia.toLowerCase();

if (dia === 'lunes' || dia === 'martes' || dia === 'miércoles' || dia === 'miercoles' || dia === 'jueves' || dia === 'viernes') {
  console.log('laborable');
} else if (dia === 'sabado' || dia === 'sábado' || dia === 'domingo') {
  console.log('fin de semana');
} else {
  console.log('día no válido');
}