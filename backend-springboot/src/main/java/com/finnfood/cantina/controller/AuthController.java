package com.finnfood.cantina.controller;

import com.finnfood.cantina.dto.LoginRequest;
import com.finnfood.cantina.model.Escola;
import com.finnfood.cantina.model.Usuario;
import com.finnfood.cantina.repository.EscolaRepository;
import com.finnfood.cantina.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EscolaRepository escolaRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(loginRequest.getEmail());
        
        if (usuario.isPresent() && loginRequest.getSenha().equals(usuario.get().getSenha())) {
            Usuario user = usuario.get();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("id", user.getId());
            response.put("nome", user.getNome());
            response.put("email", user.getEmail());
            response.put("nivelAcesso", user.getNivelAcesso().toString());
            
            return ResponseEntity.ok(response);
        }
        
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Credenciais inválidas"));
    }

    @PostMapping("/escola/login")
    public ResponseEntity<?> loginEscola(@Valid @RequestBody LoginRequest loginRequest) {
        Optional<Escola> escola = escolaRepository.findByEmail(loginRequest.getEmail());
        
        if (escola.isPresent() && loginRequest.getSenha().equals(escola.get().getSenha())) {
            Escola esc = escola.get();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("id", esc.getId());
            response.put("nome", esc.getNome());
            response.put("email", esc.getEmail());
            response.put("nivelAcesso", "ESCOLA");
            
            return ResponseEntity.ok(response);
        }
        
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Credenciais inválidas"));
    }
}