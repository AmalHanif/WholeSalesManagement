var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DealerSchema = new Schema({
    dName: String,
    company: String,
    purchaseProducts:String,
    purchasePrice:Number,
    purchasingDate:Date  
});

module.exports = mongoose.model('Dealer', DealerSchema);