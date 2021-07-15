const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const productsSchema = new Schema({

nombre: {
    type: String,
    trim: true,
},
url:  {
    type: String,
    trim: true,
}, 

descripcion: {
    type: String,
    trim: true,
},
precio: {
    type: String,
    trim: true,
},
rating:  {
    type: Number,
    trim: true,
}
});

module.exports = mongoose.model('Products', productsSchema);