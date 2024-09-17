const database ='BD3-GEOVANNA-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* ALTERA OS DADOS DE UM DOCUMENTO DA COLLECTION */
db[collection].deleteOne(
    {"autor":'Isaac Asimov'}
);