# Relatório Técnico - Entrega Parcial

**Data:** 11/04/2025
**Versão:** 1.0
**Equipe:**

- Bruno Miguel Oliveira - Desenvolvedor
- Guilherme Matos - Designer
- Richard de Lima - Auxíliar Desenvolvimento/Design
- Rian Arrotheia - Auxíliar Desenvolvimento/Design
- Lucas Henrique Oliveira - Auxíliar Desenvolvimento/Design
- Pedro Henrique Costa - Auxíliar Desenvolvimento/Design

## 1. Resumo Executivo

Estamos realizando uma série de pesquisas sobre como é construida/desenvolvida uma rede social. Estamos estudando as melhores práticas de design de software que encontramos.

## 2. Introdução

### 2.1 Objetivo do Projeto

 - Criar uma rede social para ajudar a encontrar pets perdidos.
 - Permitir que usuários cadastrem seus pets e publiquem quando eles se perderem.
 - Mostrar no mapa onde os pets foram vistos.
 - Deixar as pessoas se comunicarem pelo chat para ajudar na busca.
 - Ter um sistema fácil de usar.

### 2.2 Escopo

Criar uma rede social voltada à procura de pets perdidos, que seja funcional, dinâmica e 
objetiva, com integração de mapas interativos, cadastro de usuário e pets dentre outros. 

### 2.3 Metodologia

Será feita usando a metodologia ágil **Scrum** por meio das seguintes etapas:
 - Levantamento de requisitos.
 - Desenvolvimento do protótipo.
 - Desenvolvimento.
 - Testes e finalização.
 - Publicação/Lançamento.

## 3. Análise de Requisitos

### 3.1 Requisitos Funcionais

 - **Cadastro de Usuário:** permitir que os usuários se cadastrem com um endereço de e-mail e senha.
 - **Login de Usuário:** permitir que os usuários faça login utilizando o e-mail e senha cadastrados. 
 - **Cadastro de Pet:** poder cadastrar um pet perdido com informações como nome, 
idade, raça, foto e última localização conhecida. 
 - **Publicação de Pet Perdido:** possibilita que o usuário crie uma postagem de um pet 
perdido, incluindo foto, descrição, localização e características do animal. 
 - **Busca de Pets Perdidos:** O sistema deve permitir que os usuários busquem por pets 
perdidos ao redor de sua localização. 
 - **Filtros de Busca:** permitir que os usuários filtrem a busca de pets perdidos por raça, 
cor, tamanho e localização. 
 - **Notificações de Avistamento:** enviar uma notificação ao usuário quando um pet 
perdido for avistado por outro usuário nas proximidades. 
 - **Marcação de Localização de Avistamento:** o usuário deve poder registrar a 
localização onde encontrou um pet perdido e compartilhá-la com outros usuários. 
 - **Exibição de Pets Encontrados:** exibir as postagens de pets encontrados que estão 
registrados por outros usuários, permitindo que o dono entre em contato. 
 - **Página de Perfil do Pet:** o sistema deve permitir que os usuários acessem um perfil 
completo de seu pe t perdido com a possibilidade de atualizar as informações. 
 - **Histórico de Postagens:** armazenar o histórico de postagens do usuário, mostrandotodos os pets perdidos e encontrados registrados. 
 - **Chat entre Usuários:** permitir que os usuários se comuniquem diretamente entre si para coordenar a busca de pets perdidos ou avistamentos. 
 - **Sistema de Recompensa:** embora não em nossas ideias isso deve ser feito sem nenhum benefício, o sistema deve permitir que os donos de pets ofereçam recompensas para quem ajudar a encontrar seus animais. 
 - **Página de Suporte:** fornecer uma página de suporte com orientações sobre o que fazer quando um pet se perde e como aumentar as chances de encontrá-lo.

### 3.2 Requisitos Não Funcionais

 - **Requisitos de Desempenho:** O sistema deve ser capaz de processar inúmeras requisições de busca por pets perdidos 
por segundo, com resposta rápida e eficiente. 
 - **Requisitos de Segurança:** Garantir que todas as senhas dos usuários sejam armazenadas de forma segura. 
 - **Requisitos de Usabilidade:** Deve ser fácil de usar, com uma interface intuitiva e dinâmica que permita aos usuários 
realizar ações como cadastrar pets perdidos ou buscar pets facilmente.

### 3.3 Matriz de Rastreabilidade

Não concluímos nenhum requisito até o momento, então todos estão planejados, apenas, para nosso projeto.

## 4. Arquitetura e Design

### 4.1 Visão Geral da Arquitetura

**MVP (Model-View-Presenter)**

 - **Model:** Basicamente, os dados. Gerencia os dados, se comunicando com o banco de dados (MongoDB) e executando operações como o registro de pets e avistamentos.

 - **View:** Interface do usuário, exibindo os dados e capturando eventos de interação, como cliques e formulários.

 - **Presenter:** Intermedia o View e o Model, envia dados do Model para o View.

### 4.2 Diagramas

[Principais diagramas arquiteturais e de design]

### 4.3 Decisões de Design

Buscamos muita inspiração no layout do Instagram e nas plataformas da Meta em geral. Então será bem comum os elementos do nosso sistema, lembrarem os elementos das redes da Meta.

### 4.4 Protótipos

Os protótipos referente ao projeto, podem ser encontrados aqui: https://www.figma.com/design/sQzGFGQgvlTqrpySmDCcan/Prot%C3%B3tipos-BuscaPet?node-id=0-1&t=omrpi7FQiFOlH5sJ-1

## 5. Implementação Atual

### 5.1 Funcionalidades Implementadas

No momento, nenhuma funcionalidade foi implementada, apenas testadas em outros ambientes. Estamos na fase final de prototipação e, em seguida, seguiremos para a produção/desenvolvimento do nosso projeto. 

### 5.2 Tecnologias Utilizadas

 #### Frontend:
 - React.js
 - Next.js
 - Tailwind CSS

#### Backend:
 - Node.js
 - Express.js

#### Banco de Dados:
 - MongoDB

#### Outros:
 - JWT - Json Web Token

### 5.3 Código-fonte

Na pasta `/src` do repositório.

## 6. Testes

### 6.1 Abordagem de Teste

[Descrição da estratégia de teste adotada]

### 6.2 Testes Realizados

[Descrição dos testes já realizados]

### 6.3 Resultados

[Resultados dos testes, incluindo métricas relevantes]

## 7. Progresso do Projeto

### 7.1 Cronograma

Estamos dentro do prazo estabelecido. Estamos finalizando a fase de pesquisas e estudos, e em seguida começaremos a prototipação. Acreditamos, que estamos bem encaminhados sobre o projeto.

### 7.2 Sprints Concluídas

Somente o Sprint - Requisitos, onde definimos o que devemos atender sobre o projeto.

### 7.3 Métricas

Estamos dentro do cronograma previsto, por enquanto nenhum erro identificado em nossas pesquisas e prototipações. Concluímos 100% uma sprint até o momento (Requisitos).

## 8. Desafios e Soluções

### 8.1 Principais Desafios

Alta demanda de documentações, isso de certo ponto é bom, pois ajuda a organizar melhor o projeto, mas por ser o primeiro projeto real, estamos enfrentando alguns desafios para entender-mos alguns pontos.

### 8.2 Soluções Adotadas

Conseguimos passar por esses desafios, ao pesquisarmos sobre ou apenas tirar dúvidas com o professor.

## 9. Próximos Passos

### 9.1 Funcionalidades Planejadas

Baseando-se nos requisitos funcionais, são: 
 - **Cadastro de Usuário**
 - **Login de Usuário**
 - **Cadastro de Pet** 
 - **Publicação de Pet Perdido**
 - **Busca de Pets Perdidos**
 - **Filtros de Busca**
 - **Notificações de Avistamento**
 - **Marcação de Localização de Avistamento**
 - **Exibição de Pets Encontrados**
 - **Página de Perfil do Pet**
 - **Histórico de Postagens**
 - **Chat entre Usuários**
 - **Sistema de Recompensa**
 - **Página de Suporte**

### 9.2 Melhorias Previstas

Esperamos o sistema pronto, se não, apenas ausente de pequenos refinos.

### 9.3 Cronograma Atualizado

[Cronograma atualizado para a conclusão do projeto]

## 10. Lições Aprendidas

Documentações são necessárias, mesmo que maçante, para manter-mos uma base organizada e em constante evolução.

## 11. Conclusão

O projeto BuscaPet se encontra em fase de pesquisas/estudos sobre como será o layout e a sua aparência, estamos em busca de fortes inspirações para a construção da mesma. Definimos muitas coisas sobre o projeto, mas outras ainda precisam ser levantadas. 

## 12. Anexos

[Lista de anexos ou referências a documentos complementares]

>[!NOTE]
>Este relatório representa o estado do projeto na data da entrega parcial. Alterações e evoluções ocorrerão na segunda fase do desenvolvimento.
