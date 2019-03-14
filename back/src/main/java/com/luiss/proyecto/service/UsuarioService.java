package com.luiss.proyecto.service;

import java.util.List;

import com.luiss.proyecto.entity.Usuario;

public interface UsuarioService {
	public List <Usuario> consultaUsuario();

	public Usuario consultaUsuario(Long usuarioId);
	
	public void guardaUsuario(Usuario usuario);
	
	public void borraUsuario(Long usuarioId);
	
	public void actualizarUsuario (Usuario usuario);

}
