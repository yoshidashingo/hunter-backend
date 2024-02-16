import redis from '../redis.js';

export async function getPrefectures(req, res) {
    const prefecturesStr = await redis.get('tabelog:prefectures');
    const json = JSON.parse(prefecturesStr);
    res.json(json);
}

export async function getAreas(req, res) {
    const prefectureKey = req.query.prefecture;
    if (!prefectureKey) {
        return res.status(400).json({success: false});
    }
    const areasStr = await redis.get(`tabelog:${prefectureKey}:areas`);
    if (!areasStr) {
        return res.status(400).json({success: false});
    }
    const json = JSON.parse(areasStr);
    res.json(json);
}