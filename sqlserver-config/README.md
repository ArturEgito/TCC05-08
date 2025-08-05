# Configuração SQL Server - FinnFood Cantina

## Pré-requisitos
- Docker e Docker Compose instalados
- Porta 1433 disponível

## Como executar

### 1. Iniciar o SQL Server
```bash
cd sqlserver-config
docker-compose up -d
```

### 2. Verificar se está rodando
```bash
docker ps
```

### 3. Conectar ao banco
- **Host:** localhost
- **Porta:** 1433
- **Usuário:** sa
- **Senha:** YourPassword123
- **Database:** cantina_db

### 4. Executar script de criação (se necessário)
```bash
docker exec -it cantina-sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourPassword123 -i /docker-entrypoint-initdb.d/create_database.sql
```

## Comandos úteis

### Parar o SQL Server
```bash
docker-compose down
```

### Ver logs
```bash
docker-compose logs -f
```

### Backup do banco
```bash
docker exec cantina-sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourPassword123 -Q "BACKUP DATABASE cantina_db TO DISK = '/var/opt/mssql/backup/cantina_backup.bak'"
```

## Estrutura do Banco

### Tabelas principais:
- **usuarios** - Dados dos alunos e administradores
- **escolas** - Dados das escolas cadastradas
- **categorias** - Categorias dos produtos
- **produtos** - Produtos da cantina
- **carrinho_itens** - Itens no carrinho dos usuários
- **pedidos** - Pedidos realizados
- **pedido_itens** - Itens de cada pedido

### Dados iniciais:
- Categorias padrão (Lanches, Bebidas, Doces, etc.)
- Produtos exemplo
- Usuário admin (admin@finnfood.com / admin123)
- Escola exemplo