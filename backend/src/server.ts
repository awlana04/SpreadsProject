import express from 'express';
import path from 'path';
import cors from 'cors';

import routes from './routes';

var port = process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// app.listen(3333);

app.listen(port, () => {
  console.log('Backend Started...')
})
