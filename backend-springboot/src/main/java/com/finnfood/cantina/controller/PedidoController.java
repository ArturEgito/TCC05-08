package com.finnfood.cantina.controller;

import com.finnfood.cantina.model.Pedido;
import com.finnfood.cantina.model.PedidoItem;
import com.finnfood.cantina.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    @GetMapping("/findAll")
    public List<Pedido> findAll() {
        return pedidoRepository.findAll();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Pedido> findById(@PathVariable Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        return pedido.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/findByStatus/{status}")
    public List<Pedido> findByStatus(@PathVariable String status) {
        return pedidoRepository.findByStatus(Pedido.StatusPedido.valueOf(status.toUpperCase()));
    }

    @GetMapping("/findByCliente")
    public List<Pedido> findByCliente(@RequestParam String nomeCliente) {
        return pedidoRepository.findByNomeClienteContaining(nomeCliente);
    }

    @PostMapping("/create")
    public ResponseEntity<Pedido> create(@Valid @RequestBody Pedido pedido) {
        // Calcular subtotais dos itens
        if (pedido.getItens() != null) {
            for (PedidoItem item : pedido.getItens()) {
                item.setSubtotal(item.getPrecoUnitario().multiply(java.math.BigDecimal.valueOf(item.getQuantidade())));
                item.setPedido(pedido);
            }
        }
        
        Pedido savedPedido = pedidoRepository.save(pedido);
        return ResponseEntity.ok(savedPedido);
    }

    @PutMapping("/updateStatus/{id}")
    public ResponseEntity<Pedido> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> request) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            Pedido ped = pedido.get();
            ped.setStatus(Pedido.StatusPedido.valueOf(request.get("status").toUpperCase()));
            ped.setDataAtualizacao(LocalDateTime.now());
            return ResponseEntity.ok(pedidoRepository.save(ped));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/cancelar/{id}")
    public ResponseEntity<Pedido> cancelar(@PathVariable Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            Pedido ped = pedido.get();
            ped.setStatus(Pedido.StatusPedido.CANCELADO);
            ped.setDataAtualizacao(LocalDateTime.now());
            return ResponseEntity.ok(pedidoRepository.save(ped));
        }
        return ResponseEntity.notFound().build();
    }
}