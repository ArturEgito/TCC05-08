-- Banco de Dados FinnFood - Cantina Digital (SQL Server)
-- Criação do banco e tabelas principais

-- Criar banco de dados
USE cantina_db;
CREATE DATABASE cantina_db;
GO

USE cantina_db;
GO

-- Tabela de Usuários (Alunos)
CREATE TABLE usuarios (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    senha NVARCHAR(255) NOT NULL,
    nivel_acesso NVARCHAR(10) DEFAULT 'ALUNO' CHECK (nivel_acesso IN ('ALUNO', 'ADMIN')),
    ativo BIT DEFAULT 1,
    data_criacao DATETIME2 DEFAULT GETDATE(),
    data_atualizacao DATETIME2 DEFAULT GETDATE()
);

-- Tabela de Escolas
CREATE TABLE escolas (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    cnpj NVARCHAR(18) UNIQUE NOT NULL,
    email NVARCHAR(100) UNIQUE NOT NULL,
    senha NVARCHAR(255) NOT NULL,
    cep NVARCHAR(9),
    logradouro NVARCHAR(200),
    numero NVARCHAR(10),
    bairro NVARCHAR(100),
    cidade NVARCHAR(100),
    uf NCHAR(2),
    ativo BIT DEFAULT 1,
    data_criacao DATETIME2 DEFAULT GETDATE()
);

-- Tabela de Categorias
CREATE TABLE categorias (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(50) NOT NULL,
    descricao NVARCHAR(MAX),
    ativo BIT DEFAULT 1
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    descricao NVARCHAR(MAX),
    codigo_barras NVARCHAR(50),
    preco DECIMAL(10,2) NOT NULL,
    categoria_id BIGINT,
    imagem_url NVARCHAR(500),
    no_cardapio BIT DEFAULT 0,
    ativo BIT DEFAULT 1,
    data_criacao DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Tabela de Carrinho
CREATE TABLE carrinho_itens (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    usuario_id BIGINT NOT NULL,
    produto_id BIGINT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    data_adicao DATETIME2 DEFAULT GETDATE(),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE,
    CONSTRAINT unique_user_product UNIQUE (usuario_id, produto_id)
);

-- Tabela de Pedidos
CREATE TABLE pedidos (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    nome_cliente NVARCHAR(100) NOT NULL,
    preco_total DECIMAL(10,2) NOT NULL,
    forma_pagamento NVARCHAR(10) NOT NULL CHECK (forma_pagamento IN ('DINHEIRO', 'CARTAO', 'PIX')),
    status NVARCHAR(15) DEFAULT 'PENDENTE' CHECK (status IN ('PENDENTE', 'PREPARANDO', 'PRONTO', 'ENTREGUE', 'CANCELADO')),
    data_pedido DATETIME2 DEFAULT GETDATE(),
    data_atualizacao DATETIME2 DEFAULT GETDATE()
);

-- Tabela de Itens do Pedido
CREATE TABLE pedido_itens (
    id BIGINT IDENTITY(1,1) PRIMARY KEY,
    pedido_id BIGINT NOT NULL,
    nome_produto NVARCHAR(100) NOT NULL,
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
('Hambúrguer Clássico', 'Hambúrguer com carne, queijo, alface e tomate', 15.90, 1, 1),
('Coxinha de Frango', 'Coxinha tradicional de frango', 4.50, 4, 1),
('Suco de Laranja', 'Suco natural de laranja 300ml', 6.00, 2, 1),
('Brigadeiro', 'Brigadeiro gourmet', 3.00, 3, 1),
('Prato Feito', 'Arroz, feijão, carne e salada', 18.90, 5, 1),
('Refrigerante Lata', 'Refrigerante 350ml', 4.00, 2, 1),
('Pastel de Queijo', 'Pastel assado de queijo', 5.50, 4, 1),
('Bolo de Chocolate', 'Fatia de bolo de chocolate', 7.00, 3, 1);

-- Usuário admin padrão (senha: admin123)
INSERT INTO usuarios (nome, email, senha, nivel_acesso) VALUES
('Administrador', 'admin@finnfood.com', '$2a$10$rOvHmj1qGGrBpOr8tJ9zKOQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9v', 'ADMIN');

-- Escola exemplo
INSERT INTO escolas (nome, cnpj, email, senha, cep, logradouro, numero, bairro, cidade, uf) VALUES
('Escola Exemplo', '12.345.678/0001-90', 'escola@exemplo.com', '$2a$10$rOvHmj1qGGrBpOr8tJ9zKOQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9vQJ9v', '01234-567', 'Rua das Flores', '123', 'Centro', 'São Paulo', 'SP');

-- Criar índices para melhor performance
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_escolas_email ON escolas(email);
CREATE INDEX idx_produtos_categoria ON produtos(categoria_id);
CREATE INDEX idx_produtos_cardapio ON produtos(no_cardapio, ativo);
CREATE INDEX idx_carrinho_usuario ON carrinho_itens(usuario_id);
CREATE INDEX idx_pedidos_status ON pedidos(status);
CREATE INDEX idx_pedidos_data ON pedidos(data_pedido);

GO