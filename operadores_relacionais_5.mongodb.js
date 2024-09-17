/* NOME DO BANCO DE DADOS */
const database ='BD3-GEOVANNA-AULA';

/* NOME DO BANCO DA COEÇÃO DE DADOS */
const collection ='LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS */
use(database);

/* LISTA TODOS OS LIVROS DO TOLKIEN EM ORDEM CRESCENTE A DE VALORES */
// db[collection].find({

//    autor: `J.R.R Tolkien`
// }).sort({valor:1});

db[collection].find({

    autor: `J.R.R Tolkien`
 }).sort({valor:-1});