package com.cursojava.curso.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Getter @Setter @Column(name = "nombre")
    private String nombre;

    @Getter @Setter @Column(name = "apellido")
    private String apellido;

    @Getter @Setter @Column(name = "email")
    private String email;

    @Getter @Setter @Column(name = "telefono")
    private String telefono;

    @Getter @Setter @Column(name = "password")
    private String password;

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    //@GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter @Column(name = "id")
    private long id;

}
