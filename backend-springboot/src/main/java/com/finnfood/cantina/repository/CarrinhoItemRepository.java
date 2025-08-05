package com.finnfood.cantina.repository;

import com.finnfood.cantina.model.CarrinhoItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface CarrinhoItemRepository extends JpaRepository<CarrinhoItem, Long> {
    List<CarrinhoItem> findByUsuarioId(Long usuarioId);
    Optional<CarrinhoItem> findByUsuarioIdAndProdutoId(Long usuarioId, Long produtoId);
    void deleteByUsuarioId(Long usuarioId);
}