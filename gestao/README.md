# GestãoFit - Sistema de Gestão SaaS

Sistema completo de gestão para academias e lojas de suplementos, desenvolvido em Angular 17 com arquitetura SaaS.

## 🚀 Funcionalidades Implementadas

### ✅ **Fundação Técnica**
- **Services Layer**: AuthService, ApiService, ProductService, NotificationService
- **Guards**: AuthGuard, SubscriptionGuard para proteção de rotas
- **Interceptors**: AuthInterceptor, ErrorInterceptor para tratamento de HTTP
- **Sistema de Notificações**: Toast notifications com diferentes tipos
- **Arquitetura Modular**: Standalone components com injeção de dependência

### ✅ **Funcionalidades SaaS**
- **Autenticação**: Login/Logout com JWT tokens
- **Multi-tenancy**: Preparado para múltiplos clientes
- **Sistema de Planos**: Free, Pro, Enterprise com limitações
- **Proteção de Rotas**: Baseada em autenticação e assinatura

### ✅ **Módulos de Negócio**
- **Dashboard**: Gráficos e métricas com filtros de data
- **Produtos**: CRUD completo com filtros e paginação
- **Vendas**: Estrutura preparada para implementação
- **Despesas**: Gestão de custos com categorização
- **Categorias**: Organização de produtos

## 🛠️ Tecnologias Utilizadas

- **Angular 17** - Framework principal
- **Bootstrap 5** - UI Framework
- **Angular Material** - Componentes avançados
- **Chart.js** - Gráficos e visualizações
- **Font Awesome** - Ícones
- **RxJS** - Programação reativa

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start

# Build para produção
npm run build
```

### Acesso
- **URL**: http://localhost:4200
- **Demo Login**: admin@gestaofit.com / 123456

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços e lógica de negócio
│   ├── guards/             # Guards de autenticação
│   ├── interceptors/       # Interceptors HTTP
│   └── app.routes.ts       # Configuração de rotas
```

## 🔧 Configuração para Backend

### Variáveis de Ambiente
Crie um arquivo `environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

### Endpoints Esperados
- `POST /api/auth/login` - Autenticação
- `POST /api/auth/register` - Registro
- `GET /api/products` - Listar produtos
- `POST /api/products` - Criar produto
- `PUT /api/products/:id` - Atualizar produto
- `DELETE /api/products/:id` - Excluir produto

## 💰 Modelo de Negócio SaaS

### Planos Disponíveis
1. **Free**: R$ 0/mês
   - 1 usuário, 100 produtos, relatórios básicos

2. **Pro**: R$ 97/mês
   - 5 usuários, produtos ilimitados, relatórios avançados

3. **Enterprise**: R$ 297/mês
   - Usuários ilimitados, white-label, suporte 24/7

## 🚀 Próximos Passos

### Fase 2: Integração Backend
- [ ] Conectar com Spring Boot
- [ ] Implementar autenticação real
- [ ] Migrar dados mockados para API

### Fase 3: Funcionalidades Avançadas
- [ ] Sistema de vendas completo
- [ ] Relatórios avançados
- [ ] Integração com gateways de pagamento
- [ ] PWA e mobile app

### Fase 4: Escalabilidade
- [ ] Multi-tenancy completo
- [ ] Analytics e métricas
- [ ] White-label
- [ ] API pública

## 📞 Suporte

Para dúvidas ou suporte técnico:
- Email: suporte@gestaofit.com
- Documentação: [docs.gestaofit.com](https://docs.gestaofit.com)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
