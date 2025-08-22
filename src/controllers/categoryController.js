const Category = require('../models/Category');

exports.createCategory = async (req, res, next) => {
  try {
    const { name, description = '' } = req.body;
    const category = await Category.create({ name, description });
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    err.status = err.code === 11000 ? 409 : 400;
    next(err);
  }
};

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json({ success: true, data: categories });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const cat = await Category.findById(req.params.id);
    if (!cat) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, data: cat });
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const cat = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true, runValidators: true }
    );
    if (!cat) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, data: cat });
  } catch (err) {
    err.status = err.code === 11000 ? 409 : 400;
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const cat = await Category.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ success: false, message: 'Category not found' });
    res.json({ success: true, message: 'Category deleted' });
  } catch (err) {
    next(err);
  }
};

