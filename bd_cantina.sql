-- Banco de Dados FinnFood - Cantina Digital
-- Criação das tabelas principais

-- Tabela de Usuários (Alunos)
CREATE TABLE usuarios (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nivel_acesso ENUM('aluno', 'admin') DEFAULT 'aluno',
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Escolas
CREATE TABLE escolas (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cnpj VARCHAR(18) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cep VARCHAR(9),
    logradouro VARCHAR(200),
    numero VARCHAR(10),
    bairro VARCHAR(100),
    cidade VARCHAR(100),
    uf CHAR(2),
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Categorias
CREATE TABLE categorias (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    codigo_barras VARCHAR(50),
    preco DECIMAL(10,2) NOT NULL,
    categoria_id BIGINT,
    imagem_url VARCHAR(500),
    no_cardapio BOOLEAN DEFAULT FALSE,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela de Carrinho
CREATE TABLE carrinho_itens (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    usuario_id BIGINT NOT NULL,
    produto_id BIGINT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
    UNIQUE KEY unique_user_product (usuario_id, produto_id)
);

-- Tabela de Pedidos
CREATE TABLE pedidos (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(100) NOT NULL,
    preco_total DECIMAL(10,2) NOT NULL,
    forma_pagamento ENUM('dinheiro', 'cartao', 'pix') NOT NULL,
    status ENUM('pendente', 'preparando', 'pronto', 'entregue', 'cancelado') DEFAULT 'pendente',
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabela de Itens do Pedido
CREATE TABLE pedido_itens (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    pedido_id BIGINT NOT NULL,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id) ON DELETE CASCADE
);

-- Inserção de dados iniciais

-- Categorias padrão
INSERT INTO categorias (nome, descricao) VALUES
('Lanches', 'Sanduíches, hambúrgueres e salgados'),
('Bebidas', 'Sucos, refrigerantes e águas'),
('Doces', 'Sobremesas, bolos e guloseimas'),
('Salgados', 'Coxinhas, pastéis e salgadinhos'),
('Refeições', 'Pratos principais e combos');

-- Produtos exemplo
INSERT INTO produtos (nome, descricao, preco, categoria_id, no_cardapio) VALUES
('Hambúrguer Clássico', 'Hambúrguer com carne, queijo, alface e tomate', 15.90, 1, TRUE),
('Coxinha de Frango', 'Coxinha tradicional de frango', 4.50, 4, TRUE),
('Suco de Laranja', 'Suco natural de laranja 300ml', 6.00, 2, TRUE),
('Brigadeiro', 'Brigadeiro gourmet', 3.00, 3, TRUE),
('Prato Feito', 'Arroz, feijão, carne e salada', 18.90, 5, TRUE),
('Refrigerante Lata', 'Refrigerante 350ml', 4.00, 2, TRUE),
('Pastel de Queijo', 'Pastel assado de queijo', 5.50, 4, TRUE),
('Bolo de Chocolate', 'Fatia de bolo de chocolate', 7.00, 3, TRUE);

-- Usuário admin padrão (senha: admin123)
INSERT INTO usuarios (nome, email, senha, nivel_acesso) VALUES
('Administrador', 'admin@finnfood.com', '$2b$10$rOvHmj1qGGrBpOr8tJ9zKOQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9v', 'admin');

-- Escola exemplo
INSERT INTO escolas (nome, cnpj, email, senha, cep, logradouro, numero, bairro, cidade, uf) VALUES
('Escola Exemplo', '12.345.678/0001-90', 'escola@exemplo.com', '$2b$10$rOvHmj1qGGrBpOr8tJ9zKOQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9v', '01234-567', 'Rua das Flores', '123', 'Centro', 'São Paulo', 'SP');