// SIMULADOR DE RESERVAS

//ELECCION DEL MENU DESPLEGABLE, EL TIPO DE TARIFA, DEPENDIENDO DE LA MISMA
//SE DEBERA COLOCAR EL VALOR EN EL CAMPO VALOR DEL FORMULARIO DE RESERVA

let matutina = document.getElementById("matutina");
matutina.addEventListener("click",tarifaMatutina);

let after = document.getElementById("after");
after.addEventListener("click",tarifaAfter);

let hora = document.getElementById("hora");
hora.addEventListener("click",tarifaHora);



//DEPENDIENDO DE LA OPCION SELECCIONADA EN EL MENU DESPLEGABLE, ESTAS FUNCIONES 
//MUESTRAN A TRAVES DE DOM, LAS CARACTERISTICAS DE DICHA TARIFA

function tarifaMatutina(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML=`
  <p>El horario para la tarifa Matutina es 08:00 a 12:00.</p>
  <b>Su costo es $2500</b>
  `;
  parrafo.classList.add("tarifas", "tarifas_font", "text-center");
  let matutinaResp = document.getElementById("contenedor");
  matutinaResp.append(parrafo); 


  valor.innerText = ""
  let input= document.createElement("p");
  input.innerHTML="<p> Total = $2500</p>"
  let valorResp = document.getElementById("valor");
  valorResp.append(input); 

  localStorage.setItem("tarifa", "matutina");
  let mensaje = localStorage.getItem("tarifa");
  console.log(mensaje);

  }

  function tarifaAfter(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML=`
  <p>El horario para la tarifa de After es 19:00 a 21:00.</p>
  <p>Incluye 1 pizzeta y 2 tragos.<p/>
  <b>Su costo es $3500</b>
  `;
  parrafo.classList.add("tarifas", "tarifas_font", "text-center"); 
  let afterResp = document.getElementById("contenedor");
  afterResp.append(parrafo); 
  
  valor.innerText = ""
  let input= document.createElement("p");
  input.innerHTML="<p> Total = $3500</p>"
  let valorResp = document.getElementById("valor");
  valorResp.append(input); 

  localStorage.setItem("tarifa", "after");
  let mensaje = localStorage.getItem("tarifa");
  console.log(mensaje);
  }

function tarifaHora(){
  contenedor.innerHTML = ""
  let parrafo= document.createElement("p");
  parrafo.innerHTML= `
  <p>El horario lo elegis vos!</p>
  <b>El costo de la hora es de $740</b>
  `;
  parrafo.classList.add("tarifas", "tarifas_font", "text-center");
  let horaResp = document.getElementById("contenedor");
  horaResp.append(parrafo); 

  valor.innerText = ""
  let input= document.createElement("p");
  input.innerHTML="<p> Total = $740</p>"
  let valorResp = document.getElementById("valor");
  valorResp.append(input); 
  localStorage.setItem("tarifa", "hora");
  let mensaje = localStorage.getItem("tarifa");
  console.log(mensaje);
  }

// ME CREO UN ARRAY VACIO PARA GUARDAR LOS INPUTS DEL FORM,
  let inputs = [];
  
  // TOMO LOS VALORES DE LOS INPUTS 1 3 Y 5 DEL FORMULARIO
  let formulario = document.getElementById("formulario");
  console.log(formulario)
  formulario.addEventListener("submit",(e) => {
    e.preventDefault();
    valores = e.target.children;

  // SE MUESTRA EL ARRAY INPUTS
    console.log(inputs);

    console.log(valores[1].value);
    console.log(valores[3].value);
    console.log(valores[5].value);
    console.log(valores[7].value);

  
    Swal.fire({
      title: 'Confirma la reserva?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
    // SI SE CONFIRMA LA RESERVA MEDIANTE EL BOTON, ME GUARDO LOS VALORES DE LOS INPUTS EN EL ARRAY "INPUTS"
        inputs.push(valores[1].value);
        inputs.push(valores[3].value); 
        inputs.push(valores[5].value);
        inputs.push(valores[7].value);
        Swal.fire('Su reserva quedo confirmada', `Nombre: ${inputs[0]} \n Contacto: ${inputs[1]} e-mail: ${inputs[2]} Fecha: ${inputs[3]}`, 'success')
    
        // ME CREO EL OBJETO PERSONA MEDIANTE LA FUNCION "llamarPersona"
        llamarPersona()
      } else if (result.isDenied) {
        
        Swal.fire('Su reserva ha sido cancelada', '', 'info')
      }
    })
  } 
  )
 
console.log(inputs);

// CREO UN ARREGLO VACIO PARA IR GUARDANDO LAS PERSONAS QUE GENERAN RESERVAS
let personas = [];

function llamarPersona(){

  let nombre = inputs[0];
  let contacto = inputs[1];
  let email = inputs[2];
  let fecha = inputs[3];

  
  class Persona {
    constructor (nombre, contacto, email, fecha){
      this.nombre = nombre,
      this.contacto = contacto,
      this.email = email,
      this.fecha = fecha
    }  
  }

  const persona1 = new Persona (nombre, contacto, email, fecha);
 
//CARGO EN EL ARRAY LOS OBJETOS PERSONA EN EL ARRAY PERSONAS
  personas.unshift(persona1);

  
  console.log(personas);
}


fetch ("./promos.json")
.then (response => response.json() )
.then (data => {
  data.forEach (promos => {
  const div = document.createElement("div");
  div.innerHTML = `
  <figure class="figure">
  <img src="${promos.url}" class="figure-img img-fluid rounded" alt="Promocion ${promos.Promoción}">
</figure>
  
`;

promociones.append(div);
});

})
.catch (error => console.log (error));

fetch ("./data.json")
.then (response => response.json() )
.then (data => {
  data.forEach (habitacion => {
  const div = document.createElement("div");
  div.innerHTML = `
  <figure class="figure">
  <img src="${habitacion.url}" class="figure-img img-fluid rounded" alt="Habitacion ${habitacion.Habitacion}">
  <p>Habitacion ${habitacion.Habitacion}</p>
  <figcaption class="figure-caption">${habitacion.Nombre}</figcaption>
</figure>
  
`;

habitaciones.append(div);
});

})
.catch (error => console.log (error));