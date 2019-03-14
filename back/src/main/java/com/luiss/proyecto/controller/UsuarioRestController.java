package com.luiss.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.luiss.proyecto.entity.Usuario;
import com.luiss.proyecto.service.UsuarioService;

@RestController
public class UsuarioRestController {
	@Autowired
    private UsuarioService usuarioService;
    
    public void setAlumnoService(UsuarioService usuarioService){
        this.usuarioService = usuarioService;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/api/contactos")
    public List<Usuario> consultaUsuarios(){
        List<Usuario> usuarios = usuarioService.consultaUsuario();
        return usuarios;
    }
    //
    @CrossOrigin(origins = "*")
    @GetMapping("/api/contactos/{usuarioId}")
    public Usuario consultaUsuario(@PathVariable(name="usuarioId") Long usuarioId){
        return usuarioService.consultaUsuario(usuarioId);
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/api/contactos")
   public void guardaUsuario(@RequestBody Usuario usuario) {
    	usuarioService.guardaUsuario(usuario);
       System.out.println("Usuario guardado con éxito!");
   }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/api/contactos/{usuarioId}")
    public void borraUsuario(@PathVariable(name="usuarioId") Long usuarioId){
    	usuarioService.borraUsuario(usuarioId);
       System.out.println("Usuario eliminado con éxito!");
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/api/contactos/{usuarioId}")
   public void actualizaUsuario(@RequestBody Usuario usuario,
           @PathVariable(name="usuarioId") Long usuarioId) {
    	Usuario usu = usuarioService.consultaUsuario(usuarioId);
       if(usu != null) {
    	   usuarioService.actualizarUsuario(usuario);
           System.out.println("Alumno actualizado con éxito!");
       }
    }
}
