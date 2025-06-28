const express = require('express');
const router = express.Router();
const data = require('../data/data.js');
const serverData = require('./helperStorage');

router.post('/home/getCategories', (req, res) => {
    const sid = req.body.sid;
    console.debug(sid);
    if (!serverData.has(sid)) {
        serverData.set(sid, JSON.parse(JSON.stringify(data)));
    }
    let categories = serverData.get(sid).map(c => c.category)
    res.json(categories);
});

router.post('/home/getProducts/:id', (req, res) => {
    const id = Number(req.params.id);
    const sid = req.body.sid;

    const data = serverData.get(sid);
    res.json(data[id].items);
});

router.get('/', (req, res) => {
    res.render('home', { title: 'Gym store' });
});

router.get('/cart', (req, res) => {
    res.render('cart', { title: 'Gym store' });
});

router.get('/home/loadImages', (req, res) => {
    let images = [];
    data.forEach(cat =>
        cat.items.forEach(item => images.push(item.img))
    );
    res.json(images);
});

module.exports = router;