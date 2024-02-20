import { json2csv } from 'json-2-csv';

import Store from '../model/Store.js';

export async function getStores(req, res) {
    const { page = 1, limit = 20, url, name, tel, start, end, genre } = req.query;
    const conditions = {};
    if (name) {
        conditions['name'] = {
            $regex: new RegExp(name)
        };
    }

    if (url) {
        conditions['url'] = {
            $regex: new RegExp(url)
        };
    }

    if (tel) {
        conditions['tel'] = tel;
    }

    if (genre) {
        conditions['category'] = genre;
    }

    const JAPAN_OFFSET = '+0900';
    if (start) {
        const startDay = moment(new Date(start)).add(1, 'day').utcOffset(JAPAN_OFFSET).startOf('day').toDate();
        conditions['createdAt'] = {
            $gte: startDay
        }
    }
    if (end) {
        const endDay = moment(new Date(end)).add(1, 'day').utcOffset(JAPAN_OFFSET).startOf('day').toDate();
        conditions['createdAt'] = {
            $lte: endDay
        }
    }

    console.log('conditions:', conditions);
    const stores = await Store.find(conditions)
        .select('_id name tel category address createdAt')
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 })
    const count = await Store.countDocuments(conditions);

    return res.json({
        count,
        stores
    });
}

export async function exportToCSV(req, res) {
    const result = await json2csv(req.body.data);
    res.json({csv: result});
}