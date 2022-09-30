// SIMULADOR DE RESERVAS

let matutina = document.getElementById("matutina");
matutina.addEventListener("click",tarifaMatutina);

let after = document.getElementById("after");
after.addEventListener("click",tarifaAfter);

let hora = document.getElementById("hora");
hora.addEventListener("click",tarifaHora);

function tarifaMatutina(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML="<p>El horario para la tarifa Matutina es 08:00 a 12:00 y su costo es $2500</p>" 
  let matutinaResp = document.getElementById("contenedor");
  matutinaResp.append(parrafo); 
  }

  function tarifaAfter(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML="<p>El horario para la tarifa de After es 19:00 a 21:00 incluye 1 pizzeta y 2 tragos y su costo es 3500</p>" 
  let afterResp = document.getElementById("contenedor");
  afterResp.append(parrafo);  
  }

function tarifaHora(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML="<p>El costo de la hora es de $740</p>" 
  let horaResp = document.getElementById("contenedor");
  horaResp.append(parrafo); 
  }


  let formulario = document.getElementById("formulario");
  console.log(formulario)
  formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    let inputs = e.target.children;

    console.log(inputs[1].value);
    console.log(inputs[3].value); 
    console.log(inputs[5].value);

  } 
  )

  class Persona {
    constructor (nombre, contacto, email){
      this.inputs[1].value = nombre,
      this.inputs[3].value = contacto,
      this.inputs[5].value = email
    }  
  }

  const persona1 = new Persona (nombre, contacto, email);
  let reservaRealizada = `Ha quedado efectiva la reserva a nombre de:\n ${persona1.nombre}\n ${persona1.contacto}\n ${persona1.email}\n`;
  alert (reservaRealizada);
  console.log(persona1);

//Se agrega la persona que gestiono la reserva a un array.

const reservas = [];
reservas.push(reserva.persona1);
console.log(reservas);



/* const reservas = [];
reservas.push(reserva.persona1);
console.log(reservas); */
/* let tarifa = prompt ("Que tarifa desea conocer? Escriba: matutina, after, hora o ESC para salir");

while (tarifa != "ESC") {
  switch (tarifa) {
    case "matutina":
      tarifaMatutina();
      reserva();
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

class Matutina {
  constructor (checkin, checkout, costo){
    this.checkin = checkin,
    this.checkout = checkout,
    this.costo = costo
  }
}

const matutina = new Matutina ("08:00", "12:00", "$2500");
let mensaje = `El horario para la tarifa Matutina es ${matutina.checkin} a ${matutina.checkout} y su costo es ${matutina.costo}`;
alert(mensaje);

}

function reserva(){

  let reserva = prompt ("Desea reservar? Escriba si o no");
  if (reserva === "si"){
    let nombre = prompt ("Ingrese su nombre y apellido");
    let contacto = prompt ("Ingrese telefono celular o de contacto");
    let fecha = prompt ("Ingrese fecha de reserva");
    let email = prompt ("Ingrese su email");
    let tarjeta = prompt ("Ingrese su tarjeta de credito");
  
    class Persona {
      constructor (nombre, contacto, fecha, email, tarjeta){
        this.nombre = nombre,
        this.contacto = contacto,
        this.fecha = fecha,
        this.email = email,
        this.tarjeta = tarjeta
      }  
    }
    const persona1 = new Persona (nombre, contacto, fecha, email, tarjeta);
    let reservaRealizada = `Ha quedado efectiva la reserva a nombre de:\n ${persona1.nombre}\n ${persona1.contacto}\n ${persona1.email}\n ${persona1.fecha}\n`;
    alert (reservaRealizada);
    console.log(persona1);
    return persona1;
    
  }
}

//Se agrega la persona que gestiono la reserva a un array.

const reservas = [];
reservas.push(reserva.persona1);
console.log(reservas);


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

 */