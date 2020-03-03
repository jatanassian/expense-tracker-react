// This file will contain methods that will use the model to interact with our database

const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}

// @desc Add all transactions
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction  = await Transaction.create(req.body); // After we get the data we create a transaction using the create method from mongoose. Make sure that the data matches the one from the model, otherwise the model won't accept it

    return res.send(201).json({
      success: true,
      data: transaction
  });
  } catch (error) {
    console.log(error);
  }
}

// @desc Delete all transactions
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transactions');
}