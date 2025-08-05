# 🚀 FinnFood Backend - VS Code Setup

## ✅ Pré-requisitos Verificados
- SQL Server 2019 Express rodando na porta 1433
- Usuário 'sa' com senha '@ITB123456' funcionando

## 📋 Extensões Necessárias no VS Code
1. **Extension Pack for Java** (vscjava.vscode-java-pack)
2. **Spring Boot Extension Pack** (vmware.vscode-spring-boot)
3. **Spring Initializr** (vscjava.vscode-spring-initializr)
4. **Spring Boot Dashboard** (vscjava.vscode-spring-boot-dashboard)

## 🎯 Como Executar

### 1. Abrir no VS Code
```bash
cd z:\cantina-tcc\cantina29-07-1\backend-springboot
code .
```

### 2. Instalar Extensões
- VS Code mostrará popup para instalar extensões recomendadas
- Clique em "Install All"

### 3. Executar Aplicação
**Opção A - Debug (F5):**
- Pressione F5
- Selecione "Spring Boot-CantinaApplication"

**Opção B - Spring Boot Dashboard:**
- Abra Command Palette (Ctrl+Shift+P)
- Digite "Spring Boot Dashboard"
- Clique em "Start" na aplicação

**Opção C - Terminal Integrado:**
```bash
./mvnw spring-boot:run
```

## 🌐 URLs da Aplicação
- **API Base:** http://localhost:8080/api
- **Health Check:** http://localhost:8080/api/actuator/health

## 🔧 Configuração Atual
- **Banco:** SQL Server 2019 Express
- **Host:** localhost:1433
- **Database:** master
- **User:** sa
- **Porta:** 8080
- **Context Path:** /api

## ✅ Status
- ✅ SQL Server conectado
- ✅ Configuração VS Code pronta
- ✅ Scripts de teste criados
- ⏳ Aguardando execução no VS Code