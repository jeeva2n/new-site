const validateProduct = (req, res, next) => {
  const { name, description, category, subcategory } = req.body;
  const errors = [];

  if (!name || name.trim().length < 3) {
    errors.push('Product name must be at least 3 characters long');
  }

  if (!description || description.trim().length < 10) {
    errors.push('Description must be at least 10 characters long');
  }

  const validCategories = [
    'Welded Specimens',
    'Base Material Flawed Specimens',
    'Advanced NDT Validation Specimens',
    'POD & Training Specimens'
  ];

  if (!category || !validCategories.includes(category)) {
    errors.push('Invalid category selected');
  }

  if (!subcategory || subcategory.trim().length < 2) {
    errors.push('Subcategory is required');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};

module.exports = { validateProduct };
