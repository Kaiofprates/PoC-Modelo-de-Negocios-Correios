## PoC ( Proof of Concept) Business model based on the postal freight calculation api.

> Get Price

```sh
curl --request GET \
  --url http://127.0.0.1:3333/api \
  --header 'content-type: application/json' \
  --data '{
	"cepOrigin" : "39401138",
	"cepDestin" : "01311000"
}'
```

> response

```sh
[
  {
    "Codigo": 40010,
    "Valor": "58,40",
    "ValorMaoPropria": "0,00",
    "ValorAvisoRecebimento": "0,00",
    "ValorValorDeclarado": "0,00",
    "Erro": "",
    "MsgErro": "",
    "ValorSemAdicionais": "58,40"
  }
]

```
