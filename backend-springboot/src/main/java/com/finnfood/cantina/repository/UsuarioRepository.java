package com.finnfood.cantina.repository;

import com.finnfood.cantina.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
    List<Usuario> findByAtivoTrue();
    
    @Query("SELECT u FROM Usuario u WHERE u.nome LIKE %:nome% AND u.ativo = true")
    List<Usuario> findByNomeContaining(@Param("nome") String nome);
    
    boolean existsByEmail(String email);
}