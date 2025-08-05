package com.finnfood.cantina.controller;

import com.finnfood.cantina.model.CarrinhoItem;
import com.finnfood.cantina.model.Produto;
import com.finnfood.cantina.model.Usuario;
import com.finnfood.cantina.repository.CarrinhoItemRepository;
import com.finnfood.cantina.repository.ProdutoRepository;
import com.finnfood.cantina.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

    @Autowired
    private CarrinhoItemRepository carrinhoItemRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/obterCarrinho/{usuarioId}")
    public List<CarrinhoItem> obterCarrinho(@PathVariable Long usuarioId) {
        return carrinhoItemRepository.findByUsuarioId(usuarioId);
    }

    @PostMapping("/adicionarItem")
    public ResponseEntity<?> adicionarItem(@RequestBody Map<String, Object> request) {
        Long usuarioId = Long.valueOf(request.get("usuarioId").toString());
        Long produtoId = Long.valueOf(request.get("produtoId").toString());
        Integer quantidade = Integer.valueOf(request.get("quantidade").toString());

        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);
        Optional<Produto> produto = produtoRepository.findById(produtoId);

        if (usuario.isEmpty() || produto.isEmpty()) {
            return ResponseEntity.badRequest().body("Usuário ou produto não encontrado");
        }

        Optional<CarrinhoItem> existingItem = carrinhoItemRepository.findByUsuarioIdAndProdutoId(usuarioId, produtoId);
        
        if (existingItem.isPresent()) {
            CarrinhoItem item = existingItem.get();
            item.setQuantidade(item.getQuantidade() + quantidade);
            return ResponseEntity.ok(carrinhoItemRepository.save(item));
        } else {
            CarrinhoItem novoItem = new CarrinhoItem();
            novoItem.setUsuario(usuario.get());
            novoItem.setProduto(produto.get());
            novoItem.setQuantidade(quantidade);
            return ResponseEntity.ok(carrinhoItemRepository.save(novoItem));
        }
    }

    @DeleteMapping("/removerItem/{itemId}")
    public ResponseEntity<?> removerItem(@PathVariable Long itemId) {
        if (carrinhoItemRepository.existsById(itemId)) {
            carrinhoItemRepository.deleteById(itemId);
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/atualizarQuantidade/{itemId}")
    public ResponseEntity<CarrinhoItem> atualizarQuantidade(@PathVariable Long itemId, @RequestBody Map<String, Integer> request) {
        Optional<CarrinhoItem> item = carrinhoItemRepository.findById(itemId);
        if (item.isPresent()) {
            CarrinhoItem carrinhoItem = item.get();
            carrinhoItem.setQuantidade(request.get("quantidade"));
            return ResponseEntity.ok(carrinhoItemRepository.save(carrinhoItem));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/limparCarrinho/{usuarioId}")
    public ResponseEntity<?> limparCarrinho(@PathVariable Long usuarioId) {
        carrinhoItemRepository.deleteByUsuarioId(usuarioId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/calcularTotal/{usuarioId}")
    public ResponseEntity<BigDecimal> calcularTotal(@PathVariable Long usuarioId) {
        List<CarrinhoItem> itens = carrinhoItemRepository.findByUsuarioId(usuarioId);
        BigDecimal total = itens.stream()
                .map(item -> item.getProduto().getPreco().multiply(BigDecimal.valueOf(item.getQuantidade())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        return ResponseEntity.ok(total);
    }
}