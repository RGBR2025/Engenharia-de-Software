# Documento de Arquitetura

## Histórico de Revisões desde Arquivo

| Data       | Versão | Descrição                | Autor  |
| ---------- | ------ | ------------------------ | ------ |
| 06/04/2025 | 1.0    | Versão inicial           | Bruno Miguel Oliveira |

## 1. Introdução

### 1.1 Finalidade

Definir a arquitetura usada na construção do software

### 1.2 Escopo

Utilizando a arquitetura MVP para separar a interface (View), lógica de apresentação (Presenter) e acesso a dados (Model). Usando Next.js e TailwindCSS no frontend. O backend gerencia dados com APIs e bancos de dados como MongoDB. A arquitetura atende os princípios SOLID.

### 1.3 Definições, Acrônimos e Abreviações

## 2. Representação Arquitetural

### 2.1 Modelo Arquitetural

**MVP - Model View Presentter:** O **model** cuida dos dados; o **view** exibe, toda a parte da interface, é ele que trabalha; presentter atua como intermédio entre os dois, view e model, ele leva os dados a interface(model -> view), ou requisições da interface aos dados (view -> model).

### 2.2 Justificativa

Identificamos a que melhor se adequa ao nosso projeto, estudamos sobre todas, e fomos na que, com base na experiência de outras pessoas na construção de redes sociais, como a nossa, é a melhor escolha.

## 3. Metas e Restrições da Arquitetura

### 3.1 Metas

Um bom sistema, que seja limpo e atenda os princípios **SOLID** e bom padrôes de design.

### 3.2 Restrições

As áreas (Model, View e Presentter), não pode depender uma da outras. O model não pode depender da view, e o presenter pode ser facilmente testado.

## 4. Visão de Casos de Uso

### 4.1 Diagrama de Casos de Uso

### 4.2 Descrição dos Casos de Uso Significativos

## 5. Visão Lógica

### 5.1 Visão Geral

Construida usando Next.js para uma melhor renderização.

### 5.2 Pacotes de Design Significativos

O design padrão do framework de CSS, TailwindCSS é uma excelente 'pacote' usado no desenvolvimento.

### 5.3 Diagramas de Classes

Não conseguimos abrí-lo/importá-los!

## 6. Visão de Processos

É composto pelo FrontEnd e o Backend, com o Next.js renderizando a página, enquanto Backend manipula os dados.

## 7. Visão de Implantação

### 7.1 Diagrama de Implantação

### 7.2 Descrição dos Nós

Por meio de hospedagem de APIs, banco de dados(MongooDB).

## 8. Visão de Implementação

### 8.1 Visão Geral

É construida pelo Next.js, estilizado com TailwindCSS, 

### 8.2 Camadas

**Model:** Gerencia dados e APIs.
**View:** Gerencia o frontend com Next.js e TailwindCSS.
**Presentter:** Gerencia o acesso aos dados, como se fosse o garçom.

## 9. Visão de Dados

### 9.1 Modelo de Dados

É composto por: Usuários, posts, mensagens, notificações etc.

## 10. Tamanho e Performance

Por ser uma rede social, a idéia é suportar uma enorme quantidade de usuários, sem afetar a performance.

## 11. Qualidade

Seguir os princípios SOLID, gera uma boa qualidade, com um código limpo e eficiente.

## 12. Princípios SOLID Aplicados

Cada componente do Presentter, é individual, com sua única responsabilidade.

## 13. Padrões de Design Utilizados

MVP - Model View Presentter

>[!TIP]
>Ao longo do desenvolvimento, revise este documento para garantir que a implementação esteja alinhada com a arquitetura planejada. Documente as decisões arquiteturais importantes, incluindo as alternativas consideradas e os motivos da escolha final.
