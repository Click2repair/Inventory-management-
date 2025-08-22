const Item = require('../models/Item');

exports.createItem = async (req, res, next) => {
  try {
    const { name, category, price, quantity } = req.body;
    const item = await Item.create({ name, category, price, quantity });
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find().populate('category', 'name');
    res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
};

exports.getItemById = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id).populate('category', 'name');
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

exports.updateItem = async (req, res, next) => {
  try {
    const { name, category, price, quantity } = req.body;
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { name, category, price, quantity },
      { new: true, runValidators: true }
    ).populate('category', 'name');
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
    res.json({ success: true, message: 'Item deleted' });
  } catch (err) {
    next(err);
  }
};

exports.getItemsByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const items = await Item.find({ category: categoryId }).populate('category', 'name');
    res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
};

