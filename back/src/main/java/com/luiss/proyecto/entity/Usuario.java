package com.luiss.proyecto.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity
@Table(name="CONTACTO")

public class Usuario {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

@Column(name="NOMBRE_CONTACTO")
private String nombre_contacto;

@Column(name="TELEFONO_PERSONAL")
private Integer telefono_p;

@Column(name="TELEFONO_OFICINA")
private Integer telefono_o;

@Column(name="CORREO_PERSONAL")
private String correo_p;

@Column(name="CORREO_OFICINA")
private String correo_o;

@Column(name="FECHA_NACIMIENTO")
private String fecha_nacimiento;



public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getNombre_contacto() {
	return nombre_contacto;
}

public void setNombre_contacto(String nombre_contacto) {
	this.nombre_contacto = nombre_contacto;
}

public Integer getTelefono_p() {
	return telefono_p;
}

public void setTelefono_p(Integer telefono_p) {
	this.telefono_p = telefono_p;
}

public Integer getTelefono_o() {
	return telefono_o;
}

public void setTelefono_o(Integer telefono_o) {
	this.telefono_o = telefono_o;
}

public String getCorreo_p() {
	return correo_p;
}

public void setCorreo_p(String correo_p) {
	this.correo_p = correo_p;
}

public String getCorreo_o() {
	return correo_o;
}

public void setCorreo_o(String correo_o) {
	this.correo_o = correo_o;
}

public String getFecha_nacimiento() {
	return fecha_nacimiento;
}

public void setFecha_nacimiento(String fecha_nacimiento) {
	this.fecha_nacimiento = fecha_nacimiento;
}




}
