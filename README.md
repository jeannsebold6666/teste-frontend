<p align="center">
  <a href="http://www.procob.com">
      <img src="https://i.imgur.com/vsdxA6H.jpg" alt="Procob S.A" width="300px"/>
  </a>
</p>

___


## Processo seletivo para vaga desenvolvedor front-end

### Sobre a Vaga

- Empresa: Procob S.A
- Cargo: Desenvolvedor
- Remuneração: R$ 4.500,00
- Benefícios: Plano de Saúde (Unimed), Plano Odontológico (Dentaluni), Seguro de vida, Vale Transporte, Vale Refeição (R$ 19,00 dia), 14º Salário;
- Vaga presencial - Curitiba-PR;

### Requisitos

Requisitos para a vaga:

- Javascript (ES5, 6, 7...)
- React
- Webpack
- Git
- HTML5
- CSS
- Integração com RESTful API
- GIT

### Desejáveis

- Design Patterns
- Testes (Mocha, Jasmine, Karma, Chai)
- Pré-processador (Sass, Less)
- GitLab
- Git flow


### O teste

O desenvolvedor irá ter que criar uma aplicação ***SPA*** responsiva usando React onde irá ter 2 rotas principais:

- Buscar uma empresa pelo CNPJ. Antes de buscar verifica se essa empresa está salva no local storage, caso sim a retorna, caso contrário busca na API;
- Listar as empresas salvas no local storage e dar a opção de alterar e de deletar as mesmas do local storage;

O endpoint a ser consultado será o:

- https://5ab2810762a6ae001408c26e.mockapi.io/api/dados-empresa/empresa?search={cnpj}

Os CNPJ que podem ser utilizados para busca são:

| CNPJ de teste     |
| ------------------|
| `11111111111111`  |
| `22222222222222`  |
| `33333333333333`  |
| `44444444444444`  |
| `55555555555555`  |
| `66666666666666`  |
| `77777777777777`  |
| `88888888888888`  |
| `99999999999999`  |

Á resposta da API será um JSON contendo:

```javascript
[
  {
	"id": 1,
	"cnpj": "11111111111111",
	"nome": "EMPRESA TESTE",
	"data_fundacao": "01/12/1979",
	"situacao_receita": "REGULAR",
	"situacao_receita_data": "2016-10-17"
  }
]
```


### Como participar

1. Faça o fork do desafio.

2. Você terá **2 dias** para desenvolver a partir da data do envio do teste. 

3. Crie um **PROJECT.md** com a explicação de como executar e com o máximo de detalhes de como o teste foi feito como: tecnologia, framework etc.

4. Após concluir faça um pull request.

5. Envie um e-mail para joseroberto@procob.com com seu **curriculo e o link do seu pull request**.
