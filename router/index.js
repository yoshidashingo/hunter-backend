import apiRouter from './apiRouter.js';

export default function router(app) {
    app.get("/ping", (req, res) => {
        res.send("pong");
    });
    app.use("/api", apiRouter);
}