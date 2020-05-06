import express from 'express';
import routes from './routes';

import 'reflect-metadata';
import './database/index';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(8888, () => {console.log('Server started on port 8888!');
});
