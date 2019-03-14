package com.luiss.proyecto.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luiss.proyecto.entity.Usuario;
import com.luiss.proyecto.repository.UsuarioRepository;
import com.luiss.proyecto.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public void setUsuarioRepository( UsuarioRepository usuarioRepository) {
		this.usuarioRepository= usuarioRepository;
	}
	
	public List<Usuario> consultaUsuario() {
		List<Usuario>usuario = usuarioRepository.findAll();
		return usuario;
	}

	public Usuario consultaUsuario(Long usuarioId) {
		Optional<Usuario>usuario= usuarioRepository.findById(usuarioId);
		return usuario.get();
	}	
	
	public void guardaUsuario(Usuario usuario) {
		  usuarioRepository.save(usuario);

	}
	
	
	public void borraUsuario(Long usuarioId) {
		usuarioRepository.deleteById(usuarioId);

	}

	public void actualizarUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);

	}

}
