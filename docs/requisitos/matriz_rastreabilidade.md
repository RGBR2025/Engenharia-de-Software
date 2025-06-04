# Matriz de Rastreabilidade de Requisitos

## Histórico de Revisões deste Arquivo

| Data       | Versão | Descrição                | Autor  |
| ---------- | ------ | ------------------------ | ------ |
| 13/05/2025 | 1.0    | Versão inicial           | Guilherme Matos |

## 1. Introdução

Este documento apresenta a matriz de rastreabilidade dos requisitos do nosso sistema BuscaPet, permitindo visualizar as relações entre requisitos, casos de uso, componentes do sistema e casos de teste. A matriz garante controle de mudanças e facilita a análise de impacto durante o desenvolvimento do projeto.
## 2. Matriz de Rastreabilidade

### 2.1 Requisitos x Casos de Uso

| Requisito | UC01 | UC02 | UC03 | UC04 | UC05 | ... |
| --------- | ---- | ---- | ---- | ---- | ---- | --- |
| RF01      | X    |      | X    |      |      |     |
| RF02      |      | X    |      |      |      |     |
| RF03      |      |      | X    | X    |      |     |
| ...       |      |      |      |      |      |     |

### 2.2 Requisitos x Componentes do Sistema

| Requisito | Comp01 | Comp02 | Comp03 | Comp04 | ... |
| --------- | ------ | ------ | ------ | ------ | --- |
| RF01      | X      |        | X      |        |     |
| RF02      |        | X      |        |        |     |
| RF03      |        |        | X      | X      |     |
| ...       |        |        |        |        |     |

### 2.3 Requisitos x Casos de Teste

| Requisito | CT01 | CT02 | CT03 | CT04 | CT05 | ... |
| --------- | ---- | ---- | ---- | ---- | ---- | --- |
| RF01      | X    |      | X    |      |      |     |
| RF02      |      | X    |      |      |      |     |
| RF03      |      |      | X    | X    |      |     |
| ...       |      |      |      |      |      |     |

### 2.4 Requisitos x Requisitos (Dependências)

| Requisito | RF01 | RF02 | RF03 | RF04 | RF05 | ... |
| --------- | ---- | ---- | ---- | ---- | ---- | --- |
| RF01      | -    |      | X    |      |      |     |
| RF02      |      | -    |      |      |      |     |
| RF03      | X    |      | -    | X    |      |     |
| ...       |      |      |      |      |      |     |

## 3. Análise de Impacto

Para mudanças em requisitos, o processo de análise de impacto será o seguinte:

Identificar o requisito afetado.

Consultar as tabelas da matriz para encontrar:

Casos de uso impactados;

Componentes afetados;

Casos de teste relacionados;

Requisitos dependentes.

Avaliar tecnicamente e funcionalmente as consequências da alteração.

Documentar a análise de impacto em ata ou sistema de gestão de requisitos.

Submeter à aprovação do gerente de projeto ou partes interessadas.

Atualizar todos os artefatos relacionados (documentos, código, testes).

>[!IMPORTANT]
>A matriz de rastreabilidade deve ser mantida atualizada durante todo o ciclo de desenvolvimento para garantir a integridade do sistema.
