import express from 'express';

import {
    getStores,
    exportToCSV
} from '../controller/storeController.js';

import {
    getPrefectures,
    getAreas
} from '../controller/dataController.js';

const app = express.Router();

app.get('/stores', getStores);
app.post('/stores/export', exportToCSV);
app.get('/prefectures', getPrefectures);
app.get('/areas', getAreas);

export default app;
