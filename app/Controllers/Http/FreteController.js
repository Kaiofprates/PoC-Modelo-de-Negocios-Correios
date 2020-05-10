'use strict'
const Correios = require('node-correios');
const frete = new Correios();


class FreteController {
    async price({ request }) {
        const data = request.only(['cepOrigin', 'cepDestin']);

        let args = {
            nCdServico: '40010',
            sCepOrigem: data.cepOrigin,
            sCepDestino: data.cepDestin,
            nVlPeso: 1,
            nCdFormato: 3,
            nVlComprimento: 0.30,
            nVlAltura: 0.25,
            nVlLargura: 0.25,
            nVlDiametro: 0.25
        }
        const value = await frete.calcPreco(args).then((e) => e);
        return value

    }
}

module.exports = FreteController
