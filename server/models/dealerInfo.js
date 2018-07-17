var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DealerSchema = new Schema({
    dID: Number,
    // dId: {type: String, required: true},
    // seq: { type: Number, default: 0 },
    dName: String,
    company: String,
    purchaseProducts:String,
    purchasePrice:Number,
    purchasingDate:Date  
});

module.exports = mongoose.model('Dealer', DealerSchema);