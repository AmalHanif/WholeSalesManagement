var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SupplierSchema   = new Schema({
    cName: String,
    cAddress: String,
    cType:Boolean,
    salesProducts:String,
    salesPrice:Number,
    orderDate:Date
});



module.exports = mongoose.model('Supplier', SupplierSchema);