import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './router/index.js';
import './mongodb.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

export default app;
