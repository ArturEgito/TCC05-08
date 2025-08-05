package com.finnfood.cantina.controller;

import com.finnfood.cantina.model.Usuario;
import com.finnfood.cantina.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/findAll")
    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id);
        return usuario.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<Usuario> create(@Valid @RequestBody Usuario usuario) {
        Usuario savedUsuario = usuarioRepository.save(usuario);
        return ResponseEntity.ok(savedUsuario);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Usuario> alterar(@PathVariable Long id, @Valid @RequestBody Usuario usuario) {
        Optional<Usuario> existingUsuario = usuarioRepository.findById(id);
        if (existingUsuario.isPresent()) {
            Usuario user = existingUsuario.get();
            user.setNome(usuario.getNome());
            user.setEmail(usuario.getEmail());
            if (usuario.getSenha() != null && !usuario.getSenha().isEmpty()) {
                user.setSenha(usuario.getSenha());
            }
            return ResponseEntity.ok(usuarioRepository.save(user));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }
}