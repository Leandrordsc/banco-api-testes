const request = require ('supertest')
const { expect } = require('chai')
const { obterToken } = require('../helpers/autenticacao.js')
require ('dotenv').config()


describe ('Transferências', () => {
        describe ('POS/tranferencias', () => {

              let token
              beforeEach(async() => {
            token = await obterToken('julio.lima','123456')
    })

                it('Deve retornar sucesso com 201 quando o valor for igual ou acima de R$10,00', async() => { 
                        const resposta = await request(process.env.BASE_URL)
                        .post('/transferencias')
                        .set('Content-Type', 'application/json')
                        .set('Authorization',`Bearer ${token}` )
                        .send({
                            contaOrigem: 1,
                            contaDestino: 2,
                            valor: 10,
                            token: ""

                        })

                        expect(resposta.status).to.equal(201);                 
                })

                it('Deve retornar falha com 422 quando o valor for baixo de R$10,00',async() => {
                    const resposta = await request(process.env.BASE_URL)
                        .post('/transferencias')
                        .set('Content-Type', 'application/json')
                        .set('Authorization',`Bearer ${token}` )
                        .send({
                            contaOrigem: 1,
                            contaDestino: 2,
                            valor: 9.99,
                            token: ""

                        })

                        expect(resposta.status).to.equal(422);
                })
            })

    })