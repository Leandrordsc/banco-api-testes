const request = require ('supertest')
const { expect } = require('chai')
const { obterToken } = require('../helpers/autenticacao.js')
require ('dotenv').config()
const postTransferencia = require ('../fixture/postTransferencia.json')


describe ('Transferências', () => {
       let token
           beforeEach(async() => {
           token = await obterToken('julio.lima','123456')
    })

        describe ('POS/tranferencias', () => {
                it('Deve retornar sucesso com 201 quando o valor for igual ou acima de R$10,00', async() => { 
                        const bodyTransferencias = {...postTransferencia}
                         const resposta = await request(process.env.BASE_URL)
                        .post('/transferencias')
                        .set('Content-Type', 'application/json')
                        .set('Authorization',`Bearer ${token}` )
                        .send(bodyTransferencias)
                        expect(resposta.status).to.equal(201)
                                       
                })

                it('Deve retornar falha com 422 quando o valor for baixo de R$10,00',async() => {
                    const bodyTransferencias = {...postTransferencia}
                    bodyTransferencias.valor = 7
                    const resposta = await request(process.env.BASE_URL)
                        .post('/transferencias')
                        .set('Content-Type', 'application/json')
                        .set('Authorization',`Bearer ${token}` )
                        .send(bodyTransferencias)
                        expect(resposta.status).to.equal(422);
                })
            })

             describe ('GET/tranferencias/{id}', () => {
                it('Deve retornar sucesso com 200 e dados iguais os registros de transferencias contidos no banco de dados, quando o id for valido', async() => {
                    const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias/19')
                    .set('Authorization',`Bearer ${token}` )
                    expect(resposta.status).to.equal(200)
                    expect(resposta.body.id).to.equal(19)
                    expect(resposta.body.id).to.a('number')
                    expect(resposta.body.conta_origem_id).to.equal(2)
                    expect(resposta.body.valor).to.equal(4999.00)
                    expect(resposta.body.autenticada).to.equal(0)
                })
             })
             describe ('GET/tranferencias', () => {
                it('Deve retornar 10 elementos na paginação quando informar limite de 10 registros', async () =>{
                    const resposta = await request(process.env.BASE_URL)
                    .get('/transferencias?page=1&limit=10')
                    .set('Authorization',`Bearer ${token}`)
                    expect(resposta.status).to.equal(200)
                    expect(resposta.body.limit).to.equal(10)
                    expect(resposta.body.transferencias).to.have.lengthOf(10)

                    
                })

            })
    })