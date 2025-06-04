# Documento de Requisitos

## Histórico de Revisões Deste Arquivo

| Data       | Versão | Descrição                | Autor  |
| ---------- | ------ | ------------------------ | ------ |
| 06/05/2025 | 1.0    | Versão inicial           | Guilherme Matos |


## 1. Introdução

### 1.1 Propósito

Descrever os requisitos do projeto BuscaPet

### 1.2 Escopo

O BuscaPet, permitirá:

 - Postar sobre de animais perdidos;

 - Marcar animais como encontrados;

 - Sistema de geolocalização para facilitar buscas na região;

 - Notificações para usuários sobre seus animais;

 - Canal de comunicação entre os usuários.

### 1.3 Definições, Acrônimos e Abreviações

## 2. Descrição Geral

### 2.1 Perspectiva do Produto

O BuscaPet funcionará de forma independente, mas poderá futuramente ser integrado a bancos de dados de ONGs e clínicas veterinárias. O sistema será desenvolvido como um aplicativo híbrido (React Native), com uma API REST para o backend.

### 2.2 Funcionalidades do Produto

Cadastro de usuários;

Cadastro de pets perdidos com foto, data e localização;

Cadastro de pets encontrados;

### 2.3 Características dos Usuários

Tutores de animais;

Pessoas que encontraram animais e desejam ajudar;

### 2.4 Restrições

Deverá respeitar a LGPD quanto ao tratamento de dados pessoais;

O tempo de resposta da API deve ser inferior a 1 segundo em 95% das requisições.

## 3. Requisitos Específicos

### 3.1 Requisitos Funcionais

 - Cadastro de Usuário: permitir que os usuários se cadastrem com um endereço de 
e-mail e senha. 
 - Login de Usuário: permitir que os usuários façam login utilizando o e-mail e senha 
cadastrados. 
 - Cadastro de Pet: poder cadastrar um pet perdido com informações como nome, 
idade, raça, foto e última localização conhecida. 
 - Publicação de Pet Perdido: possibilita que o usuário crie uma postagem de um pet 
perdido, incluindo foto, descrição, localização e características do animal. 
 - Busca de Pets Perdidos: O sistema deve permitir que os usuários busquem por pets 
perdidos ao redor de sua localização. 
 - Filtros de Busca: permitir que os usuários filtrem a busca de pets perdidos por raça, 
cor, tamanho e localização. 
 - Notificações de Avistamento: enviar uma notificação ao usuário quando um pet 
perdido for avistado por outro usuário nas proximidades. 
 - Marcação de Localização de Avistamento: o usuário deve poder registrar a 
localização onde encontrou um pet perdido e compartilhá-la com outros usuários. 
 - Exibição de Pets Encontrados: exibir as postagens de pets encontrados que estão 
registrados por outros usuários, permitindo que o dono entre em contato. 
 - Página de Perfil do Pet: o sistema deve permitir que os usuários acessem um perfil 
completo de seu pet perdido com a possibilidade de atualizar as informações. 
 - Histórico de Postagens: armazenar o histórico de postagens do usuário, mostrando 
todos os pets perdidos e encontrados registrados. 
 - Chat entre Usuários: permitir que os usuários se comuniquem diretamente entre si 
para coordenar a busca de pets perdidos ou avistamentos. 
 - Sistema de Recompensa: embora não em nossas ideias isso deve ser feito sem 
nenhum benefício, o sistema deve permitir que os donos de pets ofereçam 
recompensas para quem ajudar a encontrar seus animais. 
 - Página de Suporte: fornecer uma página de suporte com orientações sobre o que 
fazer quando um pet se perde e como aumentar as chances de encontrá-lo. 

### 3.2 Requisitos Não Funcionais

 - Desempenho: o sistema deve ser capaz de processar inúmeras requisições de busca por pets perdidos 
por segundo, com resposta rápida e eficiente. 
 - Segurança: garantir que todas as senhas dos usuários sejam armazenadas de forma segura. 
 - Usabilidade: deve ser fácil de usar, com uma interface intuitiva e dinâmica que permita 

## 4. Visão Geral do Sistema

Um sistema eficiente e bem construido, com diversas funcionalidades.

## 5. Casos de Uso

Registrar animal, procurar animal, entrar em contato, etc.

## 6. Priorização de Requisitos

O Principal a ser seguido é o primeiro, Usabilidade, pois um sistema bem construido, depende de uma interface bem construida tambem.

## 7. Aprovação

| Nome   | Papel   | Assinatura | Data       |
| ------ | ------- | ---------- | ---------- |
| Guilherme Matos | Scrum Master | Assinado | 06/05/2025 |
| Bruno Miguel Oliveira | Product Owner | Assinado | 06/05/2025 |

>[!NOTE]
>Este documento será atualizado incrementalmente ao longo do desenvolvimento do projeto.
