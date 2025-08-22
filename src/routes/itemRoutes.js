const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/itemController');

router.post('/', ctrl.createItem);
router.get('/', ctrl.getItems);
router.get('/:id', ctrl.getItemById);
router.put('/:id', ctrl.updateItem);
router.delete('/:id', ctrl.deleteItem);

// List items by category
router.get('/by-category/:categoryId', ctrl.getItemsByCategory);

module.exports = router;

