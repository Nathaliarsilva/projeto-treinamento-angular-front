
# Projeto Angular do Treinamento da Minsait

Projeto CRUD de produtos (Angular + SpringBoot).




## 🔗 Links
[GITHUB FRONT - ANGULAR](https://github.com/Nathaliarsilva/projeto-treinamento-angular-front)

[GITHUB BACK - JAVA](https://github.com/Nathaliarsilva/projeto-treinamento-angular-back)

[VÍDEO DO PROJETO FUNCIONANDO](https://www.loom.com/share/27929475d83142b181eb09e0e82888c0?sid=8eed6860-f702-4ca1-bdea-6ba3ea44c905)

## Documentação da API

#### Retorna todos os produtos

```http
  GET /api/products
```


#### Retorna um produto

```http
  GET /api/products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto|


#### Cria um produto

```http
  POST /api/products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório/AutoIncremento**. O ID do produto|
| `name`      | `string` | Nome do produto|
| `barCode`      | `string` | Código de barras do produto|
| `price`      | `number` | Preço do produto|

#### Altera um produto

```http
  PUT /api/products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto|
| `name`      | `string` | Nome do produto|
| `barCode`      | `string` | Código de barras do produto|
| `price`      | `number` | Preço do produto|

#### Exclui um produto

```http
  DELETE /api/products{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do produto|


