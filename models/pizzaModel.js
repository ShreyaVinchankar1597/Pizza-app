const mongoose = require("mongoose");
const { stringify } = require("querystring");

const pizzaSchema = mongoose.Schema({
    name : {type: String, require},
    sizes : [],
    prices : [],
    type : {type: String, require},
    image : {type: String, require},
    desc : {type: String, require}
}, {
    timestamps : true,
})

const pizzaModel = mongoose.model('pizzas', pizzaSchema)

module.exports = pizzaModel