# CRUD---Desenvolvimento Web |
Participantes: Gabriel da Silva Soares, Max Daniel e Verner de Oliveira.

Este repositório contém o desenvolvimento de um sistema de gerenciamento para Barbearia/Salão, implementando o conceito CRUD (Create, Read, Updtade, Delete) nas suas áreas mais críticas.
O sistema é responsável pelo controle de:

-Clientes: Cadastro, consulta e manuntenção de dados, focado no visual para boa apresentação;

-Serviços: Gestão completa dos serviços oferecidos, incluindo a definição de preços.
_______________________________________

 Descrição do Projeto

BarberShop Premium – 

O BarberShop Premium é um sistema web desenvolvido com foco na modelagem, organização e representação estrutural de um ambiente digital destinado ao gerenciamento de uma barbearia. O projeto foi concebido com base em princípios de modularidade, clareza de interface, separação de responsabilidades e simulação de fluxos reais utilizados em sistemas de gestão de serviços.
Embora não se trate de um sistema conectado a um backend ou banco de dados, sua arquitetura foi projetada para reproduzir, de forma fiel e organizada, a estrutura que plataformas comerciais utilizam para disponibilizar funcionalidades ao cliente e ao barbeiro.

A seguir, apresenta-se uma documentação completa do sistema, descrevendo seus módulos, finalidades, estrutura interna, princípios de organização e relação entre as interfaces.

---

 Objetivo

O BarberShop Premium foi estruturado para demonstrar, de maneira clara e funcional, como um sistema de gerenciamento de barbearia pode ser organizado no contexto de um ambiente web. Ele contempla os principais pilares de um sistema moderno desse tipo:

Interface de encaminhamento entre perfis distintos

Módulo administrativo destinado ao barbeiro

Módulo de interação do cliente com os serviços

Sistema de agendamentos

Cadastro e gerenciamento de clientes

Gerenciamento de serviços

Organização e visualização da agenda de trabalho


O objetivo não é apenas apresentar telas, mas sim estabelecer, de forma explícita, como cada segmento do sistema se relaciona com os demais, permitindo ao avaliador compreender a arquitetura lógica e o fluxo operacional que sustenta o projeto.

---

2. Arquitetura Geral e Estrutura de Arquivos

O sistema utiliza uma arquitetura baseada na separação entre:

HTML (estrutura das páginas)

CSS/Tailwind (estilização e organização visual)

JavaScript (comportamentos e interações essenciais)


A divisão do projeto em múltiplos arquivos e páginas independentes segue o princípio de modularização, permitindo que cada área funcional exista isoladamente, representando um setor do sistema completo.

Arquivos principais incluídos:

index.html – Página inicial do sistema

client_dashboard.html – Painel do cliente

barber_dashboard.html – Painel administrativo do barbeiro

appointment_booking.html – Sistema de agendamento

service_management.html – Gerenciamento de serviços

schedule_management.html – Gerenciamento de agenda

client_management.html – Gerenciamento de clientes

main.css – Estilos adicionais

Arquivos JS responsáveis por interações básicas e controle de navegação


A clara divisão entre funcionalidades permite avaliar a estrutura geral do sistema como um conjunto coerente de módulos integráveis, mesmo que, nesta versão, atuem como representações estáticas.


---

3. Página Inicial – index.html

A página inicial desempenha o papel de ponto de entrada do sistema, concentrando-se no encaminhamento de usuários aos painéis apropriados.
Ela oferece dois caminhos principais:

Acesso ao Painel do Cliente

Acesso ao Painel do Barbeiro


Sua função é essencialmente estrutural e conceitual, funcionando como uma tela de credenciamento simplificada.
Embora não haja autenticação implementada, a separação entre perfis reforça o conceito de sistemas com níveis diferentes de acesso.

Além disso, a página inicial estabelece a identidade visual do projeto, apresentando:

Título institucional do sistema

Breve apresentação textual

Layout responsivo orientado à simplicidade


Do ponto de vista de design e UX, atua como uma interface objetiva, minimizando ruídos visuais e destacando apenas as possibilidades de navegação.


---

4. Painel do Cliente – client_dashboard.html

O painel do cliente representa a interface destinada ao público consumidor da barbearia.
Sua função é simular as informações que um cliente teria acesso dentro de um sistema real, como:

Serviços disponíveis

Status de agendamentos

Acesso ao módulo de marcação

Informações sobre o atendimento


A página utiliza elementos visuais como:

Cards para apresentação de serviços

Botões de acesso rápido

Estrutura de navegação minimalista


O objetivo é aproximar o usuário final da interface sem gerar complexidade.
Esta página evidencia o comportamento do sistema voltado ao cliente dentro de plataformas de agendamento, muito comuns em salões, clínicas e prestadores de serviço em geral.


---

5. Painel do Barbeiro – barber_dashboard.html

O painel do barbeiro é uma das partes mais importantes do sistema, pois representa o núcleo administrativo da barbearia.
Ele concentra visualizações e acessos essenciais, tais como:

Lista de agendamentos do dia

Acesso direto aos módulos de gerenciamento

Dados operacionais que auxiliam na organização do trabalho diário


A disposição dos elementos nesta interface segue princípios de dashboards administrativos:

1. Facilidade de interpretação: informações apresentadas de forma clara e imediata


2. Navegação otimizada: atalhos diretos para áreas críticas


3. Estrutura visual limpa: evitando distrações e priorizando o uso funcional



Esse módulo demonstra como sistemas comerciais organizam suas páginas administrativas, aproximando os conceitos de UX utilizados por grandes plataformas do mercado.


---

6. Sistema de Agendamento – appointment_booking.html

O módulo de agendamento é responsável por simular o fluxo de marcação de horário.
Ele permite ao usuário:

Selecionar o serviço desejado

Escolher um horário disponível

Revisar suas opções antes da confirmação


A estrutura da página foi construída para refletir a lógica operacional dos sistemas reais:

1. Seleção de serviço


2. Alocação de horário


3. Confirmação do agendamento



Mesmo sem backend, a criação da interface reforça os conceitos de:

Encadeamento lógico

Tomada de decisão em etapas

Organização de fluxo por interfaces sequenciais


Este módulo é fundamental para demonstrar a compreensão do processo completo de atendimento, desde a intenção do cliente até a formalização da reserva.


---

7. Gerenciamento de Serviços – service_management.html

O módulo de serviços apresenta os itens oferecidos pela barbearia, como:

Corte

Barba

Corte + Barba

Serviços adicionais conforme aplicável


A interface inclui visualização clara de:

Nome do serviço

Descrição

Valor

Opções de gerenciamento


A estrutura é organizada em cards administrativos, reforçando a lógica de sistemas de catálogos internos.
Apesar de estático, o módulo reflete a forma como barbearias e sistemas de gestão apresentam e organizam seus serviços para controle interno.


---

8. Gerenciamento de Agenda – schedule_management.html

Este módulo representa a área onde o barbeiro organiza seus horários de trabalho.
Ele é funcionalmente importante, pois demonstra:

A lógica de horários disponíveis

Intervalos de atendimento

Controle do fluxo de agendamentos


A página simula um calendário simplificado, apresentando blocos de horários com indicação de disponibilidade.
Do ponto de vista da modelagem conceitual, essa interface representa o coração do sistema de marcações, reforçando como a agenda se relaciona com o módulo de agendamentos.


---

9. Gerenciamento de Clientes – client_management.html

A interface de gerenciamento de clientes funciona como um mini-CRM interno.
Ela apresenta:

Lista de clientes cadastrados

Informações básicas de perfil

Organização e identificação dos usuários do sistema


Embora não haja persistência de dados, a página demonstra claramente como sistemas reais exibem informações de clientes em:

Clínicas

Salões

Prestadores de serviço


Sua função é reforçar o entendimento da estrutura administrativa de um ambiente profissional e destacar como dados de clientes são organizados visualmente.


---

10. Estilização e Padrões Visuais

A estilização do sistema combina:

Tailwind CSS como base principal

CSS próprio (main.css) para ajustes complementares


Essa combinação oferece:

Escalabilidade visual

Padronização

Rapidez na construção de layouts complexos

Consistência entre interfaces


A utilização de Tailwind demonstra compreensão de ferramentas modernas de estilização orientadas a utilitários, amplamente utilizadas no mercado atual.


---

11. Organização do Projeto como Ferramenta de Aprendizado

A estrutura do BarberShop Premium foi pensada para representar de forma clara:

A separação entre perfis (cliente e barbeiro)

O fluxo de serviços desde a exibição até o agendamento

A lógica de dashboards administrativos

A organização de módulos independentes mas integráveis

A forma como sistemas reais apresentam e estruturam suas funcionalidades


Mesmo sem backend, o sistema cumpre o propósito de demonstrar conhecimento na construção de interfaces funcionais, setorizadas e coerentes com o que se espera de um projeto de gerenciamento comercial.


---

12. Conclusão

O BarberShop Premium representa um sistema completo em estrutura, mesmo que simplificado em lógica interna, demonstrando de forma organizada:

Modelagem conceitual

Construção modular

Separação de responsabilidades

Clareza funcional

Aplicação de boas práticas de interfaces

Simulação de fluxos reais de atendimento e gestão
