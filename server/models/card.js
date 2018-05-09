
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CardSchema   = new Schema({
    name:String,
    country:String,
    card_number: String,
    card_expMonth: String,
    card_expYear:String,
    cvc:String,

    card_id:String,
    cus_id:String,
    charges_id:String,
    stripeToken:  String,
});

module.exports = mongoose.model('card', CardSchema);
