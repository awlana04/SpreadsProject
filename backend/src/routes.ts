import express from 'express';
import multer from 'multer';

import FileController from './controllers/FileController';
import ConcludeController from './controllers/ConcludeController';

const routes = express.Router()
const upload = multer({ dest: 'uploads/' });

const fileController = new FileController()
const concludeController = new ConcludeController()

routes.get('/conclude', concludeController.index);
routes.get('/conclude/:id', concludeController.show);
routes.put('/conclude/:id', concludeController.update);
routes.post('/upload', upload.single("conclude"), fileController.create);

export default routes;
