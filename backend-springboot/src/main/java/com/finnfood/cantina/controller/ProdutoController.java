package com.finnfood.cantina.controller;

import com.finnfood.cantina.model.Produto;
import com.finnfood.cantina.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping("/findAll")
    public List<Produto> findAll() {
        return produtoRepository.findByAtivoTrue();
    }

    @GetMapping("/findAllCardapio")
    public List<Produto> findAllCardapio() {
        return produtoRepository.findByNoCardapioTrueAndAtivoTrue();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Produto> findById(@PathVariable Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        return produto.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/findByCategoria/{id}")
    public List<Produto> findByCategoria(@PathVariable Long id) {
        return produtoRepository.findByCategoriaIdAndAtivoTrue(id);
    }

    @GetMapping("/findByNome")
    public List<Produto> findByNome(@RequestParam String nome) {
        return produtoRepository.findByNomeContaining(nome);
    }

    @PostMapping("/createSemFoto")
    public ResponseEntity<Produto> createSemFoto(@Valid @RequestBody Produto produto) {
        Produto savedProduto = produtoRepository.save(produto);
        return ResponseEntity.ok(savedProduto);
    }

    @PutMapping("/alterar/{id}")
    public ResponseEntity<Produto> alterar(@PathVariable Long id, @Valid @RequestBody Produto produto) {
        Optional<Produto> existingProduto = produtoRepository.findById(id);
        if (existingProduto.isPresent()) {
            Produto prod = existingProduto.get();
            prod.setNome(produto.getNome());
            prod.setDescricao(produto.getDescricao());
            prod.setPreco(produto.getPreco());
            prod.setCategoria(produto.getCategoria());
            prod.setImagemUrl(produto.getImagemUrl());
            return ResponseEntity.ok(produtoRepository.save(prod));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/inativar/{id}")
    public ResponseEntity<Produto> inativar(@PathVariable Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            Produto prod = produto.get();
            prod.setAtivo(false);
            return ResponseEntity.ok(produtoRepository.save(prod));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/addCardapio/{id}")
    public ResponseEntity<Produto> addCardapio(@PathVariable Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            Produto prod = produto.get();
            prod.setNoCardapio(true);
            return ResponseEntity.ok(produtoRepository.save(prod));
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/removeCardapio/{id}")
    public ResponseEntity<Produto> removeCardapio(@PathVariable Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            Produto prod = produto.get();
            prod.setNoCardapio(false);
            return ResponseEntity.ok(produtoRepository.save(prod));
        }
        return ResponseEntity.notFound().build();
    }
}