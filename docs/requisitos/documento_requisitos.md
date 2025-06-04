# Documento de Requisitos

## Histórico de Revisões Deste Arquivo

| Data       | Versão | Descrição                | Autor  |
| ---------- | ------ | ------------------------ | ------ |
| 14/03/2025 | 1.0    | Versão inicial           | Guilherme Matos |


## 1. Introdução

### 1.1 Propósito

Este documento tem como propósito descrever os requisitos funcionais e não funcionais do nosso sistema BuscaPet, uma plataforma voltada para ajudar tutores a encontrarem seus animais de estimação perdidos, bem como permitir que usuários comuniquem avistamentos ou encontrem animais que estão sob sua guarda através da rede social.

### 1.2 Escopo

O sistema BuscaPet será disponibilizado como um aplicativo web, permitindo:

Cadastro de animais perdidos;

Publicação de animais encontrados;

Sistema de geolocalização para facilitar buscas na região;

Notificações para usuários próximos a um animal perdido ou encontrado;

Canal de comunicação entre os usuários.

### 1.3 Definições, Acrônimos e Abreviações
Termo/Acrônimo: PET,GPS,UI
Definição: Animal de estimação, Global Positioning System, Interface do Usuário                     |


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

| ID   | Descrição                | Prioridade         |
| ---- | ------------------------ | ------------------ |
| RF01 | 	O sistema deve permitir o cadastro de usuários com e-mail e senha | [Alta] |
| RF02 | O usuário deve poder registrar um animal perdido com foto, descrição e local | [Alta] |
| ...  | ...                      | ...                |

### 3.2 Requisitos Não Funcionais

| ID    | Categoria   | Descrição                | Prioridade         |
| ----- | ----------- | ------------------------ | ------------------ |
| RNF01 | Usabilidade | 	A interface deve ser intuitiva e adaptável a diferentes tamanhos | [Alta] |
| RNF02 | Performance | A resposta média da API deve ser menor que 1s | [Alta] |
| RNF03 | Segurança   | Os dados dos usuários devem ser criptografados| [Alta] |
| ...   | ...         | ...                      | ...                |

## 4. Visão Geral do Sistema

[Inserir diagrama arquitetural com componentes:  API, banco de dados, notificações push, serviços de localização, etc.]

## 5. Casos de Uso

[Inserir diagrama de casos de uso com os principais fluxos: registrar animal, procurar animal, entrar em contato, etc.]

## 6. Priorização de Requisitos

Tem que ter: RF01, RF02, RF03, RNF01, RNF02

## 7. Aprovação

| Nome   | Papel   | Assinatura | Data       |
| ------ | ------- | ---------- | ---------- |
| Guilherme Matos | Scrum Master |            | 14/03/2025 |
|

>[!NOTE]
>Este documento será atualizado incrementalmente ao longo do desenvolvimento do projeto.
