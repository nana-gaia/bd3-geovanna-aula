/* NOME DO BANCO DE DADOS */
const database ='BD3-GEOVANNA-AULA';

const collection = 'LIVRARIA';

use(database);

db[collection].insertOne(

[
    {
        "codigo":"3",
        "titulo": "Os Robôs da Alvorada",
        "autor": "Isaac Asimov",
        "descricao": "Em meio à mais evoluída colônia humana fora da Terra, ocorre um crime sem precedentes: um robô humaniforme é assassinado, colocando em xeque a reputação de um importante estudioso daquele planeta, único suspeito do crime.",
        "imagem":"/livros/robos_alvorada.jpg",
        "valor": 115,
        "categoria":"Ficção Científica",
        "teste":"teste 123"
      },
    ]
);