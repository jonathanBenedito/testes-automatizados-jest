const calcularValorPedido = require('./calcular-valor-pedido');

it('Não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    // AAA - 3 passos de criação de um teste
    
    // ARRANGE - ARRUMAR - OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: 'Poção de vida', valor: 100 },
            { nome: 'Espada de prata', valor: 1000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };
    
    // ACT - AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL O RESUTADO ESPERADO
    expect(resultado).toBe(1100)
});

it('Deve cobrar valor de frete quando valor dos produtos for menor que 500', () => {
    // ARRANGE
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche', valor: 50 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };
    
    // ACT
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT
    expect(resultado).toBe(150)
});

it('Deve cobrar valor de frete quando valor dos produtos seja EXATAMENTE 500', () => {
    // ARRANGE
    const meuPedido = {
        itens: [
            { nome: 'Sanduiche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };
    
    // ACT
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT
    expect(resultado).toBe(600)
});

/* CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM BALOR DE 30% NA ENTREGA */
it('Deve adicionar um acrescimo de 20% no valor de entrega do pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoRS);

    expect(resultado).toBe(620);
})

it('Deve adicionar um acrescimo de 20% no valor de entrega do pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSC);

    expect(resultado).toBe(620);
})

it('Não deve adicionar um acrescimo de 20% no valor de entrega do pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    };

    const resultado = calcularValorPedido(pedidoComEstadoSP);

    expect(resultado).toBe(600);
})