
const express = require('express');
const router = express.Router();


const data = [
    {id: 1, title: 'Hello', order: 1},
    {id: 2, title: 'World', order: 2}
];

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:id', (req, res) => {
    let found = data.find((item) => {
           return item.id === parseInt(req.params.id)
    })
    if(found) {
        res.status(200).json(found)
    } else {
        res.status(404)
    }
})
router.post('/', function (req, res) {
   
    let itemIds = data.map(item => item.id);
    
    let orderNums = data.map(item => item.order);

  
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    
    let newOrderNum = orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;
    let newItem = {
        id: newId,
        title: req.body.title, 
        order: newOrderNum, 
     
    };

   
    data.push(newItem);

    
    res.status(201).json(newItem);
});

router.delete('/:id', function (req, res) {
    
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
       
        let targetIndex = data.indexOf(found);

       
        data.splice(targetIndex, 1);
    }

    res.sendStatus(204);
});

module.exports = router