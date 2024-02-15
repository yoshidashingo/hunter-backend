import apiRouter from './apiRouter.js';

export default function router(app) {
    app.get('/', (req, res) => {
        res.json({success: true});
    });

    app.get("/ping", (req, res) => {
        res.send("pong");
    });
    
    app.use("/api", apiRouter);
}