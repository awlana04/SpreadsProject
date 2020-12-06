import express from 'express';
import multer from 'multer';

import FileController from './controllers/FileController';
import ConcludeController from './controllers/ConcludeController';
import SupervisorController from './controllers/SupervisorController';
import PromoterController from './controllers/PromoterController';

const routes = express.Router()
const upload = multer({ dest: 'uploads/' });

const fileController = new FileController()
const concludeController = new ConcludeController()
const supervisorController = new SupervisorController()
const promoterController = new PromoterController()

routes.get('/conclude', concludeController.index);
routes.get('/conclude/:id', concludeController.show);
routes.put('/conclude/:id', concludeController.update);
routes.get('/supervisor', supervisorController.index);
routes.get('/promoter', promoterController.index);
routes.post('/upload', upload.single("conclude"), fileController.create);

export default routes;
