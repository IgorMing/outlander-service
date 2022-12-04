import 'dotenv/config';

import express from 'express';
// import swaggerUi from 'swagger-ui-express';
// import YAML from 'yamljs';
import peopleRouter from './routers/people-router';
import searchRouter from './routers/search-router';

/* create an express app and use JSON */
const app = new express();
app.use(express.json());

app.use('/people', peopleRouter);
app.use('/search', searchRouter);

/* set up swagger in the root */
// const swaggerDocument = YAML.load('api.yaml');
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
