const obtenerDiasHastaNavidad = () => {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const fechaNavidad = new Date(añoActual, 11, 25);
    const diferencia = fechaNavidad - fechaActual;
    const diasHastaNavidad = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return diasHastaNavidad;
};
const diasHastaNavidad = obtenerDiasHastaNavidad();
console.log(`Faltan ${diasHastaNavidad} días para Navidad`);


const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const fechaNacimientoDate = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
  
    // Verificar si aún no ha cumplido años en el año actual
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimientoDate.getMonth();
    const diaNacimiento = fechaNacimientoDate.getDate();
  
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
  
    return edad;
  }

  const fechaNacimiento = '2002-03-29';
  const nombre = 'Max' 
  const edad = calcularEdad(fechaNacimiento);
  console.log(`La edad de ${nombre} es ${edad} años.`);


  
  

  

