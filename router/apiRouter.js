import express from 'express';

import {
    getStores
} from '../controller/storeController.js';

const app = express.Router();

app.get('/stores', getStores);

export default app;
