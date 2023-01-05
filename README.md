<div align="center">
  <img alt="Logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCblKvXP6gV3SOJGiBYLHvM9DMVAWrDcGLxSxDeyyVew&s" width="100" />
</div>
<h1 align="center">
  Testes Automatizados Usando Jest
</h1>

📄 Link de acesso aos <a href="https://cord-delivery-7eb.notion.site/Testes-Automatizados-de-Software-c30693327c904b3fac64300282715c0b">resumos das aulas</a>. 

🖼 Link de acesso ao <a href="https://jonathanbenedito.github.io/modulo-intermediario-javascript/">deploy</a>.

## 📝 Anotações

Configuração do `package.json` para que o Jest consiga testar nosso projeto.

```jsx
{
  "name": "calcular-valor-pedidos",
  "version": "1.0.0",
  "description": "",
  "main": "calcular-valor-pedido.js",
  "scripts": {
    "test": "jest",
    "watch": "jest --watchAll *.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.3.1"
  }
}
```

É preciso criar um arquivo com extensão `.test.js` do mesmo nome do arquivo em que a função está definida, para a detecção dos testes.

```jsx
const calcularValorPedido = require('./calcular-valor-pedido');

it('não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    // AAA - 3 passos de criação de um teste
    
    // ARRANGE - ARRUMAR - OBJETO DE TESTE
    const meuPedido = {
        itens: [
            { nome: 'Poção de vida', valor: 100 },
            { nome: 'Espada de prata', valor: 1000 },
            { nome: 'Entrega', valor: 40, entrega: true }
        ]
    }
    
    // ACT - AÇÃO - O QUE VAI SER TESTADO
    const resultado = calcularValorPedido(meuPedido);

    // ASSERT - ASSERÇÃO - QUAL O RESUTADO ESPERADO
    expect(resultado).toBe(1100)
})
```

`npm run test` → Inicializar bateria de testes de uma vez.

`npm run watch` → Inicializar bateria de testes de forma constante, o Jest testará nosso código sempre que for alterado.

## 🔗 Link do website do Jest

Website: <a href="https://jestjs.io/pt-BR/" target="_blank">jestjs.io/pt-BR/</a>
