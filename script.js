// SIMULADOR DE RESERVAS

let tarifa = prompt ("Que tarifa desea conocer? Escriba: matutina, after, hora o ESC para salir");

while (tarifa != "ESC") {
  switch (tarifa) {
    case "matutina":
      tarifaMatutina();
      break;
    case "after":
      tarifaAfter();
      break;
    default:
      tarifaHora();
      break;
  }
  tarifa = prompt ("Si desea realizar otra reserva escriba el turno: matutina, after, hora o ESC para salir");
} 

function tarifaMatutina(){
  let checkIn = "08:00";
  let checkOut = "12:00";
  let costo = "$2500";
  let mensaje = `El horario para la tarifa Matutina es ${checkIn} a ${checkOut} y su costo es ${costo}`;
  alert(mensaje);
  let reserva = prompt ("Desea reservar? Escriba si o no");
  if (reserva === "si"){
    let nombre = prompt ("Ingrese su nombre y apellido");
    let contacto = prompt ("Ingrese telefono celular o de contacto");
    let email = prompt ("Ingrese fecha de reserva");
    let tarjeta = prompt ("Ingrese su tarjeta de credito");
    let reservaRealizada = `Ha quedado efectiva la reserva a nombre de ${nombre}`;
    alert (reservaRealizada);
  };
}; 

function tarifaAfter(){
  let checkIn = "19:00";
  let checkOut = "21:00";
  let comida = "1 pizzeta";
  let bebida = "2 tragos";
  let costo = "$3500";
  let mensaje = `El horario para la tarifa de After es ${checkIn} a ${checkOut} incluye ${comida} y ${bebida} y su costo es ${costo}`;
  alert(mensaje);
  let reserva = prompt ("Desea reservar? Escriba si o no");
  if (reserva === "si"){
    let nombre = prompt ("Ingrese su nombre y apellido");
    let contacto = prompt ("Ingrese telefono celular o de contacto");
    let email = prompt ("Ingrese fecha de reserva");
    let tarjeta = prompt ("Ingrese su tarjeta de credito");
    let reservaRealizada = `Ha quedado efectiva la reserva a nombre de ${nombre}`;
    alert (reservaRealizada);
  };
}; 

function tarifaHora(){
  let costo = "$1500";
  let mensaje = `El costo de la hora es ${costo}`;
  alert(mensaje);
  let reserva = prompt ("Desea reservar? Escriba si o no");
  if (reserva === "si"){
    let nombre = prompt ("Ingrese su nombre y apellido");
    let contacto = prompt ("Ingrese telefono celular o de contacto");
    let email = prompt ("Ingrese fecha de reserva");
    let tarjeta = prompt ("Ingrese su tarjeta de credito");
    let reservaRealizada = `Ha quedado efectiva la reserva a nombre de ${nombre}`;
    alert (reservaRealizada);
  };
}; 

