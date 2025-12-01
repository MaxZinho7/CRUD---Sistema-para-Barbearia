# CRUD---Desenvolvimento Web |
Participantes: Gabriel da Silva Soares, Max Daniel e Verner de Oliveira.

Este repositório contém o desenvolvimento de um sistema de gerenciamento para Barbearia/Salão, implementando o conceito CRUD (Create, Read, Updtade, Delete) nas suas áreas mais críticas.
O sistema é responsável pelo controle de:

-Clientes: consulta e manuntenção de dados, focado no visual para boa apresentação;

-Serviços: Gestão completa dos serviços oferecidos, incluindo a definição de preços.
_______________________________________

 Documentação do projeto:

BarberShop Premium – 

O BarberShop Premium é um sistema web desenvolvido com foco na modelagem, organização e representação estrutural de um ambiente digital destinado ao gerenciamento de uma barbearia. O projeto foi concebido com base em princípios de modularidade, clareza de interface, separação de responsabilidades e simulação de fluxos reais utilizados em sistemas de gestão de serviços.
Embora não se trate de um sistema conectado a um backend ou banco de dados, sua arquitetura foi projetada para reproduzir, de forma fiel e organizada, a estrutura que plataformas comerciais utilizam para disponibilizar funcionalidades ao cliente e ao barbeiro.

A seguir, apresenta-se uma documentação completa do sistema, descrevendo seus módulos, finalidades, estrutura interna, princípios de organização e relação entre as interfaces.

---
📘 Documentação Completa – Sistema de Barbearia
---

📌 1. Introdução

Este projeto consiste em um sistema web para uma barbearia, desenvolvido utilizando HTML, CSS e JavaScript. O objetivo principal é construir uma interface funcional, organizada e moderna, apresentando páginas que simulam o fluxo real de navegação de um sistema completo.

Embora o projeto atual esteja implementado apenas no front-end, toda a estrutura foi planejada para comportar um backend real futuramente, incluindo fluxo de login, simulação de dados e organização modular.


---

📁 2. Estrutura Geral do Projeto

Projeto de Barbearia/
│── index.html
│── servicos.html
│── agendamentos.html
│── cadastro.html
│── login.html
│── sobre.html
│── contato.html
│── dados.json
│
├── css/
│    └── style.css
│
├── js/
│    └── script.js
│
└── img/
     └── (imagens utilizadas no site)


---

📌 3. Explicação de Cada Pasta e Arquivo

3.1. index.html – Página Inicial

A página principal do projeto.
Ela contém:

Loader de carregamento da página

Banner principal

Seções de apresentação

Links para navegar para os demais módulos


Tags principais utilizadas aqui:

<header> – Cabeçalho da página

<nav> – Menu de navegação

<section> – Divisões semânticas

<div> – Estruturação comum

<img> – Imagens da barbearia

<footer> – Rodapé


O JavaScript controla efeitos simples e o carregamento inicial.


---

3.2. servicos.html – Lista de Serviços

Exibe os serviços disponíveis na barbearia, como cortes, barba e pacotes combinados.

Elementos importantes:

Cards de serviços

Estrutura baseada em <section> e <div>

Layout responsivo definido pelo CSS



---

3.3. agendamentos.html

Página destinada aos agendamentos.
Aqui ficaria, futuramente, a parte do CRUD para criar, visualizar, atualizar e excluir agendamentos.

Atualmente:

Estrutura da tabela

Botões fictícios de ação

Campos de formulário


Elementos HTML usados:

<form>

<input>

<button>

<table>

<tr> <td> <th>


O JavaScript pode futuramente manipular os dados da tabela usando dados reais.


---

3.4. cadastro.html

Página simulando o cadastro do usuário.

Contém:

Formulário estruturado com inputs de texto, email, senha etc.

Layout feito com <div> e classes CSS

Preparado para, futuramente, enviar dados ao backend


Tags principais:

<form>

<label>

<input>

<button>



---

3.5. login.html

Simula a tela de login.
Estrutura pensada para validação de usuário e senha.

Elementos presentes:

Campos de login

Botão de confirmação

Área para mensagens de erro (a implementar)



---

3.6. sobre.html

Página institucional apresentando a barbearia.
Contém:

Textos explicativos

Imagens

Seções com histórico e missão



---

3.7. contato.html

Página onde o usuário pode simular envio de mensagem.

Composta por:

Formulário de contato

Campos de input

Layout simples e responsivo



---

3.8. Pasta /css – Estilização Geral

style.css contém:

Reset inicial

Paleta de cores do site

Estilização de header, menus, rodapé

Classes de cards e seções

Estilos de responsividade

Loader da página inicial


O CSS organiza tudo visualmente e mantém padrão entre todas as páginas.


---

3.9. Pasta /js – Scripts de Comportamento

script.js é responsável por:

Controlar o carregamento inicial (loader)

Funções simples de interação do usuário

Preparação para, futuramente, trabalhar com JSON e backend


O script está estruturado de forma simples, fácil de expandir.


---

3.10. dados.json – Simulação de Banco de Dados

Este arquivo contém dados fictícios que representam:

Serviços

Clientes

Agendamentos


Serve como fonte de dados estática enquanto não existe backend real.


---

📌 4. Tags HTML Utilizadas e Suas Funções

A seguir, todas as tags presentes no projeto:

Estruturais

<html> — raiz do documento

<head> — metadados, links de CSS, título

<body> — conteúdo visível

<header> — topo da página

<footer> — rodapé

<nav> — navegação

<section> — agrupamento semântico

<article> — blocos de conteúdo

<main> — conteúdo principal (caso presente em alguma página)

<div> — divisão genérica


Texto

<h1> … <h6> — títulos

<p> — parágrafos

<span> — texto inline

<label> — rótulos de inputs


Mídia

<img> — imagens

<video> (caso exista em alguma página)


Formulários

<form> — formulários

<input> — campos de entrada

<select> — lista de opções (caso usada)

<option>

<textarea> — texto multilinha

<button> — botão


Tabelas

<table> — tabela

<thead> — cabeçalho

<tbody> — corpo

<tr> — linha

<th> — célula de título

<td> — célula normal


Metadados

<link> — arquivos CSS

<script> — arquivos JS

<meta> — charset, viewport, descrição



---

📌 5. Como o Backend Funcionaria (Documentação Teórica Completa)

Mesmo não implementado, abaixo segue o funcionamento planejado caso o backend fosse desenvolvido.


---

🔧 5.1. Arquitetura Geral do Backend

O backend seria estruturado seguindo:

MVC (Model-View-Controller)

PHP

Doctrine ORM (para mapeamento objeto-relacional)

Rotas organizadas por controladores

Autenticação por sessão



---

🗄️ 5.2. Banco de Dados Planejado

Tabelas principais:

1. Usuários

id_usuario (PK)
nome
email
senha
telefone

2. Serviços

id_servico (PK)
nome
descricao
valor
duracao

3. Agendamentos

id_agendamento (PK)
id_usuario (FK)
id_servico (FK)
data
horario
status


---

🧩 5.3. Models (Doctrine ORM)

Cada tabela seria representada por uma entidade:

Usuario

Servico

Agendamento


Cada classe teria:

Atributos

Anotações do Doctrine

Relacionamentos (OneToMany, ManyToOne)


Exemplo resumido de atributo:

/** @Column(type="string") */
private $nome;


---

🧭 5.4. Controllers

Controladores planejados:

AuthController

login()

logout()

registrar()


UsuarioController

listar()

criar()

editar()

excluir()


ServicoController

listar()

criar()

editar()

excluir()


AgendamentoController

listar()

criar()

editar()

excluir()



---

🔄 5.5. Funcionalidades do CRUD

As quatro operações seriam implementadas assim:

Criar

Recebe dados do formulário → valida → salva via Doctrine.

Ler

Busca registros no banco → envia para a view.

Atualizar

Carrega dados existentes → edita → salva alterações.

Excluir

Apaga o registro → retorna para a listagem.


---

🔐 5.6. Sistema de Login

Fluxo planejado:

1. Usuário envia email e senha


2. Controller verifica com Doctrine


3. Senha comparada com hash


4. Em caso de sucesso → grava sessão


5. Em caso de erro → mensagem de “credenciais inválidas”




---

📡 5.7. JSON como substituto temporário

Enquanto não há backend:

dados.json pode simular banco de dados

O JavaScript pode ler, exibir e manipular dados

Porém não salva permanentemente (não é a mesma coisa que backend)



---

📌 6. Considerações Finais

O projeto foi desenvolvido com foco na organização, modularidade e semântica, preparando terreno para um backend real no futuro. Todas as páginas estão estruturadas para integrar facilmente os fluxos de login, CRUD e manipulação de dados de forma completa.

Toda a parte visual está finalizada, responsiva e totalmente adaptada para receber um backend posteriormente.
A documentação acima descreve não só o que existe no projeto, mas também como seria a futura evolução dele.
