const form_editar = document.querySelector('#form_editar');
document.getElementById('tbody').addEventListener('click', e =>{
		if (e.target.classList.contains('edit')) {
			let id_editar = e.target.getAttribute('id-contacto')
			console.log(id_editar);	
			fetch('http://localhost:8080/api/contactos/'+ id_editar, {
		    method: "GET",
		    headers: {
		      'Content-Type': 'application/json',
		    },
		    mode:'cors'
		  })
			.then(data => data.json())
				.then(contacto => {
					
					console.log(contacto);
					document.querySelector('#nombre_contacto').setAttribute('value' , contacto.nombre_contacto);
					document.querySelector('#telefono_p').setAttribute('value' , contacto.telefono_p);
					document.querySelector('#correo_p').setAttribute('value' , contacto.correo_p);
					document.querySelector('#telefono_o').setAttribute('value' , contacto.telefono_o);
					document.querySelector('#correo_o').setAttribute('value' , contacto.correo_o);
					document.querySelector('#fecha_nacimiento').setAttribute('value' , contacto.fecha_nacimiento);
		    
		  })
		  .catch(function(error){
		    //error();
		    console.log('Request failure: ', error);
		    
		  });
		  actualizarContacto(id_editar)

		}

		});
function actualizarContacto(id_contacto){
var btnAct = document.getElementById("btn_nActualizar")

  console.log(btnAct);
btnAct.addEventListener("click", (e) =>{
  e.preventDefault();
  let datosContacto = {};
  let data = new FormData(document.getElementById("form_editar"));

  const inputs = document.querySelectorAll("input");

  Array.from(inputs).forEach(elem =>{
    datosContacto[elem.name] = elem.value;
    console.log(datosContacto[elem.name]);
  })
  datosContacto.id = id_contacto;

  fetch("http://localhost:8080/api/contactos/"+ id_contacto, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    mode:'cors',
    body: JSON.stringify(datosContacto)
  })
  .then(function (data){
  	success();
    //customElementSucces();
    console.log('Request success: ', datosContacto);
    
  })
  .catch(function(error){
  	error();
    //customElementError();
    console.log('Request failure: ', error);
    
  });
});

}

function success(){
    alert("Registro Actualizado!");
		      location.reload();   
}


function error(){
	alert("Registro No!! Actualizado");
	location.reload();
}

