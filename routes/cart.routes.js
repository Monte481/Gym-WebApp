const router = require('express').Router();
const serverData = require('./helperStorage');

router.post('/cart/add/:id', (req, res) => {
   const id = Number(req.params.id);
   const {sid, category} = req.body;

   let data;

   if (serverData.has(sid)) data = serverData.get(sid);

   if (category === 'drugi') {
      let count = 0;
      data.forEach(cat => {
         cat.items.forEach(item => {
            if (count === id) {
               item.count++;
               res.json(item);
            }
            count++;
         });
      });
   } else {
      const item = data[category].items[id];
      item.count++;
      res.json(item);
   }
});

router.post('/cart/remove/:id', (req, res) => {
   const id = Number(req.params.id);
   const {sid, category} = req.body;

   let data;

   if (serverData.has(sid)) data = serverData.get(sid);

   if (category === 'drugi') {
      let count = 0;
      data.forEach(cat => {
         cat.items.forEach(item => {
            if (count === id) {
               item.count--;
               res.json(item);
            }
            count++;
         });
      });
   } else {
      const item = data[category].items[id];
      item.count--;
      res.json(item);
   }
});

router.post('/cart/getAll', (req, res) => {
   const sid = req.body.sid;
   const cart = serverData.get(sid);
   res.json(cart);
});

router.get('/home', (req, res) => {
   res.render('home', { title: 'Gym store' });
});

module.exports = router;
