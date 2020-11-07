import { Router } from 'express';

const debtsRouter = Router();

debtsRouter.get('/', (request, response) => {
  return response.json('teste');
});

export default debtsRouter;
