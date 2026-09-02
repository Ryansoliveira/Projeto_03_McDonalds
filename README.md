# 🍔 Projeto 03 – Sistema de Pedidos McDonald's

Projeto acadêmico desenvolvido em **JavaScript**, utilizando obrigatoriamente o padrão de projeto **GoF Criacional – Prototype**.

## 🎯 Objetivo

Simular um sistema simplificado de pedidos do McDonald's, utilizando cinco McOfertas previamente cadastradas como **protótipos**.

Novos pedidos são criados por meio da clonagem de uma McOferta existente e podem ser personalizados sem alterar o protótipo original.

## 🧩 Padrão Prototype

O padrão Prototype permite criar novos objetos a partir da cópia de um objeto existente.

Neste projeto:

- `McOferta` representa o protótipo;
- `clone()` cria uma nova instância com os mesmos dados;
- `GerenciaMcOferta` armazena e localiza os protótipos;
- os pedidos personalizados são criados a partir das McOfertas clonadas.

## 🍟 McOfertas cadastradas

| Nº | Lanche | Batata | Refrigerante |
|---:|---|---|---|
| 1 | Big Mac | Média | Médio |
| 2 | Quarteirão com Queijo | Média | Médio |
| 3 | McChicken | Média | Médio |
| 4 | Cheddar McMelt | Média | Médio |
| 5 | Quarteirão Duplo com Queijo | Média | Médio |

As McOfertas originais possuem `numeroPedido = 0`, pois são os protótipos.

## 🛠️ Estrutura

```text
PROJETO-03-McDONALDS/
├── src/
│   └── McOfertas.js
├── package.json
└── README.md
```

## ▶️ Como executar

É necessário ter o **Node.js** instalado.

No terminal:

```bash
node src/McOfertas.js
```

O programa exibirá no console as cinco McOfertas originais, os três pedidos personalizados e uma validação demonstrando que o protótipo original permaneceu inalterado.

## 📚 Requisitos atendidos

- Classe `McOferta`;
- atributos `numeroPedido`, `numero`, `lanche`, `batataTamanho` e `refrigeranteTamanho`;
- método obrigatório `clone()`;
- classe `GerenciaMcOferta`;
- cadastro e localização das McOfertas;
- clonagem dos protótipos;
- pelo menos três pedidos personalizados;
- manutenção dos protótipos originais sem alteração;
- execução em JavaScript/Node.js;
- exibição dos resultados no console.

## 👨‍💻 Projeto acadêmico

**Projeto 03 – Sistema de Pedidos McDonald's – Padrão Prototype**

Desenvolvimento individual.
