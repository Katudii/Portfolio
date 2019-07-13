const express = require('express');
const members = require('../person');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    const found = members.some(x => x.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(x => x.id === parseInt(req.params.id)));
    } else {
        res.status(400).json(`id:${req.params.id} was not found`);
    }
});

router.post('/', (req, res) => {
    res.json(req.body);
});

module.exports = router;