// This file will contain methods that will use the model to interact with our database

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}