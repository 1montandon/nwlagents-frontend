# NWL Agents

Projeto desenvolvido durante o evento **Next Level Week (NLW)** da **Rocketseat**.

## 🚀 Tecnologias Utilizadas

- **React 19.1** - Biblioteca para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server para desenvolvimento rápido
- **React Router DOM** - Roteamento client-side para SPAs
- **TanStack Query** - Gerenciamento de estado assíncrono e cache
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Biome** - Linter e formatter para JavaScript/TypeScript
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Biblioteca de ícones

## 🏗️ Arquitetura e Padrões

- **Componente-based Architecture** - Estrutura modular com componentes React
- **Client-side Routing** - Navegação SPA com React Router
- **Custom Hooks Pattern** - Hooks customizados para lógica reutilizável
- **Compound Components** - Componentes compostos com Radix UI
- **CSS-in-JS** - Estilização com Tailwind CSS classes
- **Query Management** - Gerenciamento de dados assíncronos com React Query

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
│   └── ui/        # Componentes de interface (botões, inputs, etc.)
├── pages/         # Páginas da aplicação
├── lib/           # Utilitários e configurações
├── app.tsx        # Componente raiz com providers
└── main.tsx       # Ponto de entrada da aplicação
```

## ⚙️ Setup e Configuração

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd web
```

2. Instale as dependências:

```bash
npm install
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente

### Configuração do Ambiente

O projeto está configurado com:

- **Vite** como bundler e dev server
- **Tailwind CSS** para estilização
- **Path aliases** (`@/` aponta para `./src/`)
- **TypeScript** para tipagem
- **Biome** para linting e formatação

### Executando o Projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Dependências Principais

- `react` & `react-dom` - Core do React
- `react-router-dom` - Roteamento
- `@tanstack/react-query` - Gerenciamento de estado
- `tailwindcss` - Estilização
- `lucide-react` - Ícones
- `@radix-ui/react-slot` - Primitivos de UI

---

Desenvolvido com ❤️ durante o **NLW** da **Rocketseat**
