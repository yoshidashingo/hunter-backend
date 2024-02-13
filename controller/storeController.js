import Store from '../model/Store.js';

export async function getStores(req, res) {
    const { page = 1, limit = 20 } = req.query;


    const stores = await Store.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 })
    const count = await Store.countDocuments();

    return res.json({
        count,
        stores
    });
}