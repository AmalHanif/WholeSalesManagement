var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var StockSchema   = new Schema({
        pID:Number,
        pName: String,
        pBrand: String,
        pQuantity:String,
        pCost:Number,
        pPrice:Number,
        purchaseDate:Date,

    
});

module.exports = mongoose.model('Stock', StockSchema);