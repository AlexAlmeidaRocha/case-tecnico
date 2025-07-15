# Lista de Usuários - Case Técnico

Uma aplicação React TypeScript para gerenciar uma lista de usuários com integração à API pública JSONPlaceholder.

## Funcionalidades

- Listar usuários
- Funcionalidade de pesquisa por nome
- Visualização detalhada de usuários
- Sistema de favoritos com adição e remoção
- Loading states durante carregamento
- Design responsivo

## Estrutura do Projeto

### Visão Geral da Arquitetura

O projeto segue uma arquitetura modular baseada em **Atomic Design** combinada com padrões modernos do React/Redux.

```
src/
├── components/                 # Componentes organizados por Atomic Design
│   ├── Atoms/                 # Componentes básicos e indivisíveis
│   │   ├── Button/            # Botão reutilizável
│   │   │   ├── Button.tsx     # Componente principal
│   │   │   ├── Button.styles.ts # Estilos com Styled Components
│   │   │   └── Button.interfaces.ts # Tipagens TypeScript
│   │   ├── LoadingSpinner/    # Spinner de carregamento
│   │   ├── SearchInput/       # Input de pesquisa
│   │   └── Text/              # Componente de texto tipográfico
│   ├── Molecules/             # Combinação de Atoms
│   │   ├── InfoCard/          # Card de informações
│   │   ├── NoResultCard/      # Card para estados vazios
│   │   └── UserCard/          # Card de usuário
│   ├── Pages/                 # Páginas
│   │   ├── Favorites/         # Página de favoritos
│   │   ├── UserDetail/        # Página de detalhes (classe)
│   │   └── UserList/          # Página de listagem
│   └── Template/              # Templates de layout
│       └── MainLayout/        # Layout principal da aplicação
├── store/                     # Gerenciamento de estado Redux
│   ├── store.ts              # Configuração da store
│   ├── usersSlice.ts         # Slice do Redux Toolkit
│   ├── sagas.ts              # Redux Sagas para async
│   └── user.interfaces.ts     # Tipos e interfaces do domínio de usuários
├── hooks/                    # Custom hooks
│   └── redux.ts             # Hooks tipados para Redux
├── router/                   # Configuração de rotas
│   └── index.tsx            # Setup do React Router
└── styles/                   # Estilos globais
    └── GlobalStyle.ts        # Reset CSS e variáveis globais
```

### Por que Atomic Design?

O **Atomic Design** foi escolhido por várias razões:

#### 1. **Escalabilidade e Organização**

- **Atoms**: Componentes básicos (`Button`, `Text`, `SearchInput`) que podem ser reutilizados em toda aplicação
- **Molecules**: Combinações lógicas de atoms (`UserCard`, `InfoCard`) que formam unidades funcionais
- **Pages**: Componentes complexos que representam telas completas
- **Templates**: Estruturas de layout reutilizáveis

#### 2. **Reutilização e Consistência**

- Garantem consistência visual (todos os botões usam o mesmo `Button` do atomo, por exemplo)
- Permitem reutilização de padrões (cards seguem a mesma estrutura, por exemplo)
- Reduz duplicação de código e estilos
- Implementação "automática" do SOLID, como o "S" (Princípio da responsabilidade única) onde os componentes são separados e cada um tem uma única responsabilidade

#### 3. **Manutenibilidade**

- Mudanças em um atom se propagam automaticamente
- Testes podem focar em unidades pequenas e bem definidas
- Facilita onboarding de novos desenvolvedores

### Organização de Arquivos por Componente

Cada componente segue o padrão de **colocation** com três arquivos:

```
Component/
├── Component.tsx           # Lógica e JSX do componente
├── Component.styles.ts     # Estilos com Styled Components
└── Component.interfaces.ts # Tipagens TypeScript
```

#### Vantagens desta Organização:

1. **Colocation**: Arquivos relacionados ficam próximos
2. **Separação de Responsabilidades**:
   - `.tsx` → lógica e estrutura
   - `.styles.ts` → apresentação visual
   - `.interfaces.ts` → contratos de dados
3. **Manutenibilidade**: Fácil encontrar e modificar estilos específicos
4. **Reutilização**: Interfaces podem ser importadas independentemente

**Nota:** Caso tenha documentação e test, porem também manter na mesmas estrutura, por exemplo:

```
Component/
├── Component.tsx           # Lógica e JSX do componente
├── Component.styles.ts     # Estilos com Styled Components
├── Component.interfaces.ts # Tipagens TypeScript
├── Component.stories.tsx   # Doc usando storybook
└── Component.test.tsx      # Test com Jest / React Library Test
```

## Como Executar

### Pré-requisitos

- pnpm (gerenciador de pacotes)

### Instalação e Execução

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd case-tecnico
```

2. **Instale as dependências**

```bash
pnpm install
```

3. **Execute o projeto em modo de desenvolvimento**

```bash
pnpm run dev
```

4. **Acesse a aplicação**
   - Abra [http://localhost:5173](http://localhost:5173) no seu navegador

## Implementação Técnica

### Custom Hooks

- **Reutilização de lógica**: Extraem lógica de estado e efeitos colaterais em funções reutilizáveis, evitando duplicação de código.
- **Separação de responsabilidades**: Mantêm componentes focados na renderização enquanto isolam lógica complexa nos hooks personalizados.
- **Facilita testes**: Permitem testes unitários mais focados ao isolar lógica específica dos componentes.
- **Abstração de complexidade**: Escondem implementações complexas (APIs, cache, validação) atrás de interfaces simples.
- **Composição flexível**: Combinam-se com outros hooks para criar funcionalidades modulares.
- **Manutenibilidade**: Centralizam mudanças de lógica em um local, evitando alterações em múltiplos componentes.
- **Consistência**: Garantem aplicação uniforme da mesma lógica em toda a aplicação, reduzindo bugs.

### API

- **Base URL**: `https://jsonplaceholder.typicode.com/users` (sugerida)

### Redux

- (Requisito do projeto)

### Saga

- (Requisito do projeto)

### Class e Functional Components

- **UserDetail**: Class component (Requisito do projeto)
- **Outros**: Functional components com hooks (padrão moderno e recomendado pela própria Doc do React)

### react-hooks-localstorage

Apesar de não haver a necessidade de persistência local, utilizei a biblioteca react-hooks-localstorage [(desenvolvida por mim)](https://github.com/AlexAlmeidaRocha/react-hooks-localstorage) para armazenar os usuários favoritos
