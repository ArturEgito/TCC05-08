package com.finnfood.cantina.repository;

import com.finnfood.cantina.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByStatus(Pedido.StatusPedido status);
    
    @Query("SELECT p FROM Pedido p WHERE p.nomeCliente LIKE %:nomeCliente%")
    List<Pedido> findByNomeClienteContaining(@Param("nomeCliente") String nomeCliente);
    
    @Query("SELECT p FROM Pedido p WHERE p.dataPedido BETWEEN :inicio AND :fim")
    List<Pedido> findByDataPedidoBetween(@Param("inicio") LocalDateTime inicio, @Param("fim") LocalDateTime fim);
}