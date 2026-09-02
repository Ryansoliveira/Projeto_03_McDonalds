class McOferta {
    constructor(numeroPedido, numero, lanche, batataTamanho, refrigeranteTamanho) {
        this.numeroPedido = numeroPedido;
        this.numero = numero;
        this.lanche = lanche;
        this.batataTamanho = batataTamanho;
        this.refrigeranteTamanho = refrigeranteTamanho;
    }

    clone() {
        return new McOferta(
            this.numeroPedido,
            this.numero,
            this.lanche,
            this.batataTamanho,
            this.refrigeranteTamanho
        );
    }
}

class GerenciaMcOferta {
    constructor() {
        this.mcOfertas = new Map();
    }

    adicionarMcOferta(mcOferta) {
        this.mcOfertas.set(mcOferta.numero, mcOferta);
    }

    localizarMcOferta(numero) {
        return this.mcOfertas.get(numero);
    }

    clonarMcOferta(numero) {
        const prototipo = this.localizarMcOferta(numero);

        if (!prototipo) {
            throw new Error(`McOferta nº ${numero} não encontrada.`);
        }

        return prototipo.clone();
    }
}

const gerencia = new GerenciaMcOferta();

gerencia.adicionarMcOferta(
    new McOferta(0, 1, "Big Mac", "Média", "Médio")
);

gerencia.adicionarMcOferta(
    new McOferta(0, 2, "Quarteirão com Queijo", "Média", "Médio")
);

gerencia.adicionarMcOferta(
    new McOferta(0, 3, "McChicken", "Média", "Médio")
);

gerencia.adicionarMcOferta(
    new McOferta(0, 4, "Cheddar McMelt", "Média", "Médio")
);

gerencia.adicionarMcOferta(
    new McOferta(0, 5, "Quarteirão Duplo com Queijo", "Média", "Médio")
);

const pedido1 = gerencia.clonarMcOferta(1);
pedido1.numeroPedido = 1;
pedido1.batataTamanho = "Mega";
pedido1.refrigeranteTamanho = "Grande";

const pedido2 = gerencia.clonarMcOferta(3);
pedido2.numeroPedido = 2;
pedido2.batataTamanho = "Grande";
pedido2.refrigeranteTamanho = "Pequeno";

const pedido3 = gerencia.clonarMcOferta(5);
pedido3.numeroPedido = 3;
pedido3.batataTamanho = "Pequena";
pedido3.refrigeranteTamanho = "Grande";

function exibirMcOferta(oferta, titulo) {
    console.log(titulo);
    console.log(`Pedido: ${oferta.numeroPedido}`);
    console.log(`McOferta: ${oferta.numero}`);
    console.log(`Lanche: ${oferta.lanche}`);
    console.log(`Batata: ${oferta.batataTamanho}`);
    console.log(`Refrigerante: ${oferta.refrigeranteTamanho}`);
    console.log("----------------------------------------");
}

console.log("========================================");
console.log("      SISTEMA DE PEDIDOS McDONALD'S");
console.log("       PADRÃO DE PROJETO PROTOTYPE");
console.log("========================================\n");

console.log("McOFERTAS ORIGINAIS (PROTÓTIPOS)\n");

for (const oferta of gerencia.mcOfertas.values()) {
    exibirMcOferta(oferta, `McOferta nº ${oferta.numero}`);
}

console.log("\nPEDIDOS PERSONALIZADOS (CLONES)\n");

exibirMcOferta(pedido1, "Pedido personalizado nº 1");
exibirMcOferta(pedido2, "Pedido personalizado nº 2");
exibirMcOferta(pedido3, "Pedido personalizado nº 3");

console.log("VALIDAÇÃO DO PADRÃO PROTOTYPE\n");

const prototipo1 = gerencia.localizarMcOferta(1);

console.log(`Protótipo nº 1 - Batata: ${prototipo1.batataTamanho}`);
console.log(`Pedido nº 1     - Batata: ${pedido1.batataTamanho}`);
console.log(`Protótipo nº 1 - Refrigerante: ${prototipo1.refrigeranteTamanho}`);
console.log(`Pedido nº 1     - Refrigerante: ${pedido1.refrigeranteTamanho}`);

if (
    prototipo1.batataTamanho === "Média" &&
    prototipo1.refrigeranteTamanho === "Médio"
) {
    console.log("\n✓ Protótipo original permanece inalterado.");
    console.log("✓ O pedido foi criado por clonagem e personalizado com sucesso.");
}
