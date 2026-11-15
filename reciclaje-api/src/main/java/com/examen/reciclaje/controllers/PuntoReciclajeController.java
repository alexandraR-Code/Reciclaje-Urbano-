package com.examen.reciclaje.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.repositories.PuntoReciclajeRepository;

@CrossOrigin(origins = "http://localhost:5173") // CORS: deja pasar a React
@RestController // responde datos (JSON), no paginas
@RequestMapping("/api/puntos") // ruta base que pide el examen
public class PuntoReciclajeController {

	private final PuntoReciclajeRepository repository;

	// Spring entrega el repositorio solo (inyeccion de dependencias)
	public PuntoReciclajeController(PuntoReciclajeRepository repository) {
		this.repository = repository;
	}

	// GET /api/puntos: devuelve todos los puntos
	@GetMapping
	public List<PuntoReciclaje> listar() {
		return repository.findAll();
	}

	// POST /api/puntos: guarda un punto nuevo
	@PostMapping
	public PuntoReciclaje guardar(@RequestBody PuntoReciclaje punto) {
		// @RequestBody ya convirtio el JSON en objeto: solo falta guardarlo
		return repository.save(punto);
	}
}