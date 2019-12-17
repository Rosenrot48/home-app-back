const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('<h2>Привет странник</h2>')

});

router.get('/tods', (req, res) => {
    res.send('Привет странник1')

});

module.exports = router;
