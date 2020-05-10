'use strict'

const { test, trait } = use('Test/Suite')('Example')

trait('Test/ApiClient')

test('Gep cep from user', async ({ client }) => {
  const response = await client.get('/api').send({
    "cepOrigin": "39401138",
    "cepDestin": "01311000"
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    "ValorValorDeclarado": "0,00"
  }])
})


test('CEP no found ', async ({ client }) => {
  const response = await client.get('/api').send({
    "cepOrigin": "39401138",
    "cepDestin": "36570000"
  }).end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    "MsgErro": "CEP de destino invalido.",
  }])
})


