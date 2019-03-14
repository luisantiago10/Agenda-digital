var div_contactos = document.querySelector("#contacto");
var td_contacto = document.querySelector("#tbody");

var contactoss = [];

	getContactos()
	.then(data => data.json())
		.then(contactos => {
			console.log()
			listadoContactos(contactos)
			
	})
		.catch(error =>{
			console.log(error);
		});

function getContactos(){
	return fetch('http://localhost:8080/api/contactos');
}

function listadoContactos(contactos){

	contactos.map((contacto, i) =>{
				let td_nombre = document.createElement('tr');
				
					for(let a in contacto){
						
						if(a != 'id'){
						let tr_nombre = document.createElement('td');
						
						tr_nombre.innerHTML = `${contacto[a]}`.toUpperCase();
						
						td_nombre.appendChild(tr_nombre);
					}
					
				}
				let tr_edit = document.createElement('td');
				tr_edit.innerHTML = `<button type="button" class="btn btn-primary edit" id-contacto="${contacto.id}" data-toggle="modal" data-target="#Editar">Editar</button>`;
				td_nombre.appendChild(tr_edit);
				let tr_del = document.createElement('td');
				tr_del.innerHTML = `<button class="btn btn-danger delete" id-contacto="${contacto.id}"  data-toggle="modal" data-target="#Eliminar" >Borrar</button>`;
				td_nombre.appendChild(tr_del);
				
				
		
				td_contacto.appendChild(td_nombre);
	

			});
}
	// <td><button type="button" class="btn btn-primary">Editar</button></td>
   //<td><button type="button" class="btn btn-danger">Eliminar</button></td>
