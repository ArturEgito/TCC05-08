-- Usar o banco cantina_db existente
USE cantina_db;

-- Verificar se as tabelas existem e estão corretas
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE';

-- Se precisar recriar, descomente as linhas abaixo:
-- DROP TABLE IF EXISTS pedido_itens;
-- DROP TABLE IF EXISTS carrinho_itens;
-- DROP TABLE IF EXISTS pedidos;
-- DROP TABLE IF EXISTS produtos;
-- DROP TABLE IF EXISTS categorias;
-- DROP TABLE IF EXISTS usuarios;
-- DROP TABLE IF EXISTS escolas;