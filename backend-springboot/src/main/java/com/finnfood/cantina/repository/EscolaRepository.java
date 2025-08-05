package com.finnfood.cantina.repository;

import com.finnfood.cantina.model.Escola;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface EscolaRepository extends JpaRepository<Escola, Long> {
    Optional<Escola> findByEmail(String email);
    Optional<Escola> findByCnpj(String cnpj);
    List<Escola> findByAtivoTrue();
    boolean existsByEmail(String email);
    boolean existsByCnpj(String cnpj);
}