package com.finnfood.cantina.controller;

import com.finnfood.cantina.model.Categoria;
import com.finnfood.cantina.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping("/findAll")
    public List<Categoria> findAll() {
        return categoriaRepository.findByAtivoTrue();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Categoria> findById(@PathVariable Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        return categoria.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Categoria> create(@Valid @RequestBody Categoria categoria) {
        Categoria savedCategoria = categoriaRepository.save(categoria);
        return ResponseEntity.ok(savedCategoria);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Categoria> update(@PathVariable Long id, @Valid @RequestBody Categoria categoria) {
        Optional<Categoria> existingCategoria = categoriaRepository.findById(id);
        if (existingCategoria.isPresent()) {
            Categoria cat = existingCategoria.get();
            cat.setNome(categoria.getNome());
            cat.setDescricao(categoria.getDescricao());
            return ResponseEntity.ok(categoriaRepository.save(cat));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if (categoria.isPresent()) {
            Categoria cat = categoria.get();
            cat.setAtivo(false);
            categoriaRepository.save(cat);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}