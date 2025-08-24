const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    choice: {
        type: String,
        required: true,
        enum: ['don', 'rec'], // don = donate, rec = receive
    },
    phone_no: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    }
}, {
    timestamps: true
});

// Index for faster queries
userSchema.index({ choice: 1, city: 1 });

module.exports = mongoose.model('User', userSchema);
