
const express = require('express');
const router = express.Router();


const data = [
    {id: 1, title: 'Hello', order: 1},
    {id: 1, title: 'World', order: 2}
];

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:title', (req, res) => {
    let found = data.find((item) => {
           return item.title === parseInt(req.params.title)
    })
    if(found) {
        res.status(200).json(found)
    } else {
        res.status(404)
    }
})

module.exports = router