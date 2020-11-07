import { Router } from 'express';
import debtsRouter from './debts.routes';

const routes = Router();

routes.use('/debts', debtsRouter);

export default routes;
