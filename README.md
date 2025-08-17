# NLW Agents - Frontend 🎨

[![React](https://img.shields.io/badge/React-19+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0+-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1+-teal.svg)](https://tailwindcss.com/)

Uma aplicação frontend moderna desenvolvida durante a **20ª Edição do NLW (Next Level Week)** da Rocketseat. Interface intuitiva para interação com agentes de IA, focada em transcrição de áudio e Q&A inteligente.

## 📋 Descrição

O NLW Agents Frontend é uma Single Page Application (SPA) que oferece uma experiência fluida para:

- **Criação e gerenciamento de salas** temáticas
- **Gravação e upload de áudios** diretamente do navegador
- **Interface de perguntas e respostas** alimentada por IA
- **Visualização de transcrições** em tempo real
- **Design responsivo** e acessível

## 🛠 Tecnologias Utilizadas

| Tecnologia           | Versão | Uso                              |
| -------------------- | ------- | -------------------------------- |
| **React**            | 19+     | Biblioteca de interface          |
| **TypeScript**       | 5.8+    | Linguagem de programação       |
| **Vite**             | 7.0+    | Build tool e dev server          |
| **TailwindCSS**      | 4.1+    | Framework CSS utilitário        |
| **React Router DOM** | 7.6+    | Roteamento SPA                   |
| **React Hook Form**  | 7.61+   | Gerenciamento de formulários    |
| **TanStack Query**   | 5.83+   | Gerenciamento de estado servidor |
| **Radix UI**         | -       | Componentes acessíveis          |
| **Zod**              | 4.0+    | Validação de schemas           |
| **Day.js**           | 1.11+   | Manipulação de datas           |
| **Lucide React**     | 0.525+  | Ícones modernos                 |

## 📁 Estrutura do Projeto

```
nwlagents-frontend/
├── 📄 package.json                # Dependências e scripts
├── 📄 vite.config.ts              # Configuração do Vite
├── 📄 tsconfig.json               # Configuração TypeScript
├── 📄 components.json             # Configuração shadcn/ui
├── 📄 index.html                  # Template HTML
├── 🎨 src/
│   ├── 📄 main.tsx                # Entry point da aplicação
│   ├── 📄 app.tsx                 # Componente raiz
│   ├── 📄 index.css               # Estilos globais
│   ├── 🧩 components/
│   │   ├── create-room-form.tsx   # Formulário de criação
│   │   ├── question-form.tsx      # Formulário de perguntas
│   │   ├── question-item.tsx      # Item de pergunta
│   │   ├── question-list.tsx      # Lista de perguntas
│   │   ├── room-list.tsx          # Lista de salas
│   │   └── ui/                    # Componentes base (shadcn/ui)
│   ├── 🌐 http/
│   │   ├── use-create-question.ts # Hook para perguntas
│   │   ├── use-create-room.ts     # Hook para salas
│   │   ├── use-room-questions.ts  # Hook para listar Q&A
│   │   ├── use-rooms.ts           # Hook para listar salas
│   │   └── types/                 # Tipagens das requisições
│   ├── 🔧 lib/
│   │   ├── utils.ts               # Utilitários gerais
│   │   └── dayjs.ts               # Configuração Day.js
│   └── 📱 pages/
│       ├── create-room.tsx        # Página inicial
│       ├── room.tsx               # Página da sala
│       └── record-room-audio.tsx  # Página de gravação
```

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**
- O **backend do projeto** rodando na porta 3333

## 🚀 Configuração e Setup

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd nwlagents-frontend
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o ambiente

Certifique-se de que o backend esteja rodando em `http://localhost:3333`

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`

### 5. Build para produção

```bash
npm run build
# ou
yarn build
```

## 🎯 Principais Funcionalidades

### 🏠 Página Inicial - Criação de Salas

- **Formulário intuitivo** para criação de novas salas
- **Validação em tempo real** com mensagens claras
- **Lista de salas existentes** com navegação rápida

### 🏢 Página da Sala

- **Visualização de perguntas e respostas**
- **Formulário para novas perguntas**
- **Botão para gravação de áudio**
- **Layout responsivo** para mobile e desktop

### 🎵 Gravação de Áudio

- **Interface de gravação** usando Web Audio API
- **Controles intuitivos** (play, pause, stop)
- **Upload automático** após gravação
- **Feedback visual** do processo

### 💬 Sistema de Q&A

- **Perguntas contextuais** baseadas no conteúdo
- **Respostas geradas por IA** do backend
- **Histórico organizado** por data/hora
- **Interface conversacional**

## 🎨 Sistema de Design

### Componentes UI (shadcn/ui)

```tsx
// Exemplo de uso dos componentes
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function ExemploComponente() {
  return (
    <Card className="p-6">
      <Input placeholder="Digite sua pergunta..." />
      <Button className="mt-4">Enviar</Button>
    </Card>
  )
}
```

### Esquema de Cores TailwindCSS

- **Primary**: Tons de azul para CTAs
- **Secondary**: Cinzas para texto secundário
- **Success**: Verde para feedbacks positivos
- **Danger**: Vermelho para erros e alertas

## 🔄 Gerenciamento de Estado

### TanStack Query (React Query)

```tsx
// Exemplo de hook customizado
export function useRooms() {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: getRooms,
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}
```

### React Hook Form + Zod

```tsx
// Exemplo de formulário validado
const schema = z.object({
  question: z.string().min(1, "Pergunta é obrigatória")
})

function QuestionForm() {
  const form = useForm({
    resolver: zodResolver(schema)
  })
  
  // ...resto do componente
}
```

## 📱 Rotas da Aplicação

| Rota                  | Componente        | Descrição                          |
| --------------------- | ----------------- | ------------------------------------ |
| `/`                   | `CreateRoom`      | Página inicial - criar/listar salas |
| `/room/:roomId`       | `Room`            | Página da sala com Q&A              |
| `/room/:roomId/audio` | `RecordRoomAudio` | Interface de gravação              |

## 🧪 Scripts Disponíveis

| Script            | Descrição                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desenvolvimento |
| `npm run build`   | Build otimizado para produção    |
| `npm run preview` | Preview do build de produção     |

## 📄 Licença

Este projeto foi desenvolvido durante a **20ª Edição do NLW** da [Rocketseat](https://rocketseat.com.br) e é livre para uso educacional e pessoal.

### Padrões de Código

- Use **TypeScript** para tipagem estática
- Siga as convenções do **ESLint/Biome**
- Componentes em **PascalCase**
- Hooks customizados com prefixo **"use"**

---

**Desenvolvido com ❤️ durante o NLW Agents da Rocketseat**

