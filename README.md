# CRUD---Desenvolvimento Web |
Participantes: Gabriel da Silva Soares, Max Daniel e Verner de Oliveira.

Este repositório contém o desenvolvimento de um sistema de gerenciamento para Barbearia/Salão, implementando o conceito CRUD (Create, Read, Updtade, Delete) nas suas áreas mais críticas.
O sistema é responsável pelo controle de:

-Clientes: Cadastro, consulta e manuntenção de dados, focado no visual para boa apresentação;

-Serviços: Gestão completa dos serviços oferecidos, incluindo a definição de preços.
_______________________________________

1. Descrição do Projeto

O projeto consiste no desenvolvimento de um sistema de barbearia utilizando as linguagens HTML, CSS .
O objetivo é criar uma base funcional que represente a estrutura principal do site, incluindo páginas, menus e seções, para futuras implementações como sistema de agendamento, cadastro de clientes e gerenciamento de horários.


---

2. Objetivo

O objetivo principal do projeto é desenvolver a base de um sistema web para uma barbearia, permitindo que, no futuro, os usuários possam realizar agendamentos, visualizar serviços e obter informações da barbearia.
Nesta etapa, o grupo concentrou-se na construção da estrutura inicial e design do sistema.

---

3. Funcionalidades Implementadas

Até o momento, o sistema contém as seguintes funcionalidades e partes visuais:

Página inicial da barbearia com informações básicas

Estrutura de navegação entre páginas

Layout inicial das seções (Home (que se clicar recarrega a página), produtos e contato)


Ainda faltam funcionalidades como o agendamento, validação de formulários e armazenamento de dados.

---

# HTML

Um projeto HTML moderno que utiliza Tailwind CSS para criar aplicativos web responsivos com configuração mínima.

## 🚀 Recursos

- **HTML5** - Estrutura HTML moderna com as melhores práticas
- **Tailwind CSS** - Framework CSS que prioriza utilitários para desenvolvimento rápido de UI
- **Componentes Personalizados** - Classes de componentes pré-criadas para botões e contêineres
- **Scripts NPM** - Comandos fáceis de usar para desenvolvimento e construção
- **Design Responsivo** - Abordagem mobile-first para todos os tamanhos de tela

## 📋 Pré-requisitos

- Node.js (v12.x ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Instale as dependências:
```bash
npm install
# ou
yarn install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 📁 Estrutura do Projeto

```
html_app/
├── css/
│ ├── tailwind.css # Arquivo-fonte do Tailwind com utilitários personalizados
│ └── main.css # CSS compilado (gerado)
├── pages/ # Páginas HTML
├── index.html # Ponto de entrada principal
├── package.json # Dependências e scripts do projeto
└── tailwind.config.js # Configuração do CSS do Tailwind
```

## 🎨 Estilo

Este projeto usa o CSS do Tailwind para estilo. As classes de utilitários personalizados incluem:



## 🧩 Personalização

Para personalizar a configuração do Tailwind, edite o arquivo `tailwind.config.js`:

## 📦 Construir para Produção

Construir o CSS para produção:

```bash
npm run build:css
# ou
yarn build:css
```

## 📱 Design Responsivo

O aplicativo foi construído com design responsivo usando os pontos de interrupção do Tailwind CSS:

- `sm`: 640px e superior
- `md`: 768px e superior
- `lg`: 1024px e superior
- `xl`: 1280px e superior
- `2xl`: 1536px e superior
