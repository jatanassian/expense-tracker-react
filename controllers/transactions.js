// This file will contain methods that will use the model to interact with our database

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

// @desc Add all transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transactions');
}

// @desc Delete all transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
}