import express from 'express';

import {
    getStores
} from '../controller/storeController.js';

import {
    getPrefectures,
    getAreas
} from '../controller/dataController.js';

const app = express.Router();

app.get('/stores', getStores);
app.get('/prefectures', getPrefectures);
app.get('/areas', getAreas);

export default app;
