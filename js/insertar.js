var btnocn = document.getElementById("btn_nContacto")

  console.log(btnocn);
btnocn.addEventListener("click", (e) =>{
  e.preventDefault();
  let datosContacto = {};
  let data = new FormData(document.getElementById("form_nuevos"));

  const inputs = document.querySelectorAll("input");

  Array.from(inputs).forEach(elem =>{
    datosContacto[elem.name] = elem.value;
    console.log(datosContacto[elem.name]);
  })

  fetch("http://localhost:8080/api/contactos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode:'cors',
    body: JSON.stringify(datosContacto)
  })
  .then(function (data){
    customElementSucces();
    console.log('Request success: ', datosContacto);
    
  })
  .catch(function(error){
    customElementError();
    console.log('Request failure: ', error);
    
  });
});

function customElementSucces(){
  class miBoton extends HTMLButtonElement{
  constructor(){
    super();
      alert("Registro Guardado!");
      location.reload();
    
  }
}
customElements.define('mi-boton',miBoton,{
  extends: 'button'
});
}

function customElementError(){
  class miBoton extends HTMLButtonElement{
  constructor(){
    super();
      alert("Registro No!! Guardado");
      location.reload();
  }
}
customElements.define('mi-boton',miBoton,{
  extends: 'button'
});
}