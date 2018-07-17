var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SalesSchema   = new Schema({
        sID:Number,
        cName: String,
        cAddress: String,
        pName: String,
        pBrand: String,
        pQuantity:String,
        pSold:Number,
        pPrice:Number,
        soldDate:Date,

    
});

module.exports = mongoose.model('Sales', SalesSchema);