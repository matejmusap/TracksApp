import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { error404, error500 } from './src/utils/handle.js';

import router from './src/router.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);
app.use(error404);
app.use(error500);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});