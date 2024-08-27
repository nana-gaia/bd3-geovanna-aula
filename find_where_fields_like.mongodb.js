/* NOME DO BANCO DE DADOS */
const database ='BD3-GEOVANNA-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='Livraria';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* SELECIONA TODOS OS REGISTROS DA COLEÇAO: */
db[collection].find(
    {"descricao":/robôs/i},
    {"_id":0, "codigo":0,}
)