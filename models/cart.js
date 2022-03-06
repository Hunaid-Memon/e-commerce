const mongoose = require('mongoose');

const Cart = mongoose.Schema({
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    products: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true    
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('product', Product);