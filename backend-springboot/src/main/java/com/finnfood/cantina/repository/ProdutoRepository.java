package com.finnfood.cantina.repository;

import com.finnfood.cantina.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    List<Produto> findByAtivoTrue();
    List<Produto> findByNoCardapioTrueAndAtivoTrue();
    List<Produto> findByCategoriaIdAndAtivoTrue(Long categoriaId);
    
    @Query("SELECT p FROM Produto p WHERE p.nome LIKE %:nome% AND p.ativo = true")
    List<Produto> findByNomeContaining(@Param("nome") String nome);
}