const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'O preenchimento deste campo é obrigatorio'
    },
    twitter_url: {
        type: String,
        required: 'O preenchimento deste campo é obrigatorio'
    },
    
    
});

mongoose.model('User', userSchema);