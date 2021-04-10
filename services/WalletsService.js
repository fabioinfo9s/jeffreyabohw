var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var WalletsSchema = require('../schema/WalletsSchema');

module.exports = {
    createUserWallet: createUserWallet,
};

function createUserWallet(user_id, callback) {
    const postData = {
        user_id: user_id,
        available_balance: '0',
        pending_balance: '0',
        last_topup_amount: '0',
    }
    var walletData = new WalletsSchema( postData );
    walletData.id = walletData._id;
    walletData.save()
    .then( resolve => {
        return callback(null, { status: true, message: 'Successful', data: resolve })
    })
    .catch( reject => {
        return callback({ status: false, message: 'Connection error!' }, null)
    })
}

function createWithdrawal(user_id, amount, callback) {
    WalletsSchema.findOne({ user_id: user_id }, function(reject, resolve) {
        if (reject) {
            return callback({ status: false, message: 'Connection error!' }, null)
        }
        if (!resolve) {
            return callback({ status: false, message: 'User wallet information does not exist!' }, null)
        }
        if (resolve) {
            var wallet = resolve;
            const available_balance = Number(wallet.available_balance);
            const withdraw_amount = Number(amount);
            if (available_balance < withdraw_amount) {
                return callback({ status: false, message: 'Insufficient funds! Top up your wallet' }, null)
            }
            const newBalance = available_balance - withdraw_amount;
        }
    }) 
}