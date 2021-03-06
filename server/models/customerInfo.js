var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
        cID: Number,
        cName: String,
        cAddress: String,
        originalPrice:Number,
        salesProducts:String,
        salesPrice:Number,
        orderDate:Date  
});

module.exports = mongoose.model('Customer', CustomerSchema);