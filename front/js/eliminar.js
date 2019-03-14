const div_contacto = document.querySelector('#verContacto');
document.getElementById('tbody').addEventListener('click', e =>{
		if (e.target.classList.contains('delete')) {
			let id_delete = e.target.getAttribute('id-contacto')
			console.log(id_delete);	
			listadoContacto(id_delete);
			document.getElementById('Eliminar').addEventListener('click', e =>{
				if(e.target.classList.contains('elim')){

			fetch("http://localhost:8080/api/contactos/"+ id_delete, {
			    method: "DELETE",
			    headers: {
		      		"Content-Type": "application/json",
		    },
		    mode:'cors'
		  })
			.then(function (data){
		    successEliminar();
		    console.log('Request success: ', data);
		    
		  })
		  	.catch(function(error){
		    errorEliminar();
		    console.log('Request failure: ', error);
		    
		  });
		}
			});//eliminar
			

		}//if

		});//tbody

function listadoContacto(contacto_id){
	let usuario = [];
fetch('http://localhost:8080/api/contactos/'+ contacto_id, {
		    method: "GET",
		    headers: {
		      'Content-Type': 'application/json',
		    },
		    mode:'cors'
		  })
			.then(data => data.json())
				.then(contacto => {
					console.log(contacto);
					let nombre_c = document.createElement('p');
					let tel_c = document.createElement('p');
					let correo_c = document.createElement('p');
					let tel2_c = document.createElement('p');
					let correo2_c = document.createElement('p');
					let fecha_c = document.createElement('p');
					nombre_c.innerHTML = `Nombre: ${contacto.nombre_contacto}`.toUpperCase();
					tel_c.innerHTML = `Telefono Personal: ${contacto.telefono_p}`.toUpperCase();
					correo_c.innerHTML = `Correo Personal: ${contacto.correo_p}`.toUpperCase();
					tel2_c.innerHTML = `Telefono Trabajo: ${contacto.telefono_o}`.toUpperCase();
					correo2_c.innerHTML = `Correo Trabajo: ${contacto.correo_o}`.toUpperCase();
					fecha_c.innerHTML = `Cumpleaños: ${contacto.fecha_nacimiento}`.toUpperCase();
					div_contacto.appendChild(nombre_c);
					div_contacto.appendChild(tel_c);
					div_contacto.appendChild(correo_c);
					div_contacto.appendChild(tel2_c);
					div_contacto.appendChild(correo2_c);
					div_contacto.appendChild(fecha_c);
					
		    
		  })
		  .catch(function(error){
		    //error();
		    console.log('Request failure: ', error);
		    
		  });

}

		function successEliminar(){
		      alert("Registro Eliminado!");
		      location.reload();   
		}


		function errorEliminar(){
		     alert("Registro No!! Guardado");
		  	location.reload();
		}

