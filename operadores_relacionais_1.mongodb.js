/* NOME DO BANCO DE DADOS */
const database ='BD3-GEOVANNA-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* SELECIONA O LIVRO COM VALOR MAIOR QUE DETERMINADO VALOR */
// db[collection].find({
//     valor:{$gt:100}
// });

/* SELECIONA O LIVRO DE MENOR VALOR */
db[collection].find(
    {valor:{$lte:100}}
)