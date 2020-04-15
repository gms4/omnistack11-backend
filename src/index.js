const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 *  rota/recurso
 */

 /**
  * métodos http:
  * 
  * GET: buscar info no backend
  * POST: criar info no backend
  * PUT: alterar info no backend
  * DELETE: deletar info no backend
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?"
 * (filtros, paginação, etc)
 * Route Params: utilizados para identificar recursos
 * Request Body: corpo da requisição usado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc;
 */

 /**
  * Driver: SELECT -> from users;
  * Query Builder - > table ('users).select('*').where();
  */