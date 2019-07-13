const Customer = require('../PRACTISE/ref/mongoose');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body) {
        return res.status(500).send('bad request');
    }

    let customer = new Customer(req.body);
    customer.save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }

            res.status(201).send(doc);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = router;