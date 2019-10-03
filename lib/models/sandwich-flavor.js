const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
  name: RequiredString,
  cookies: {
    type: String,
    Required: true,
    enum: ['regular', 'chocolate', 'cinnamon', 'graham']
  },
  iceCream: RequiredString,
  toppings: [RequiredString]
}, 
{ collection: 'sandwich-flavors' });

module.exports = mongoose.model('SandwichFlavor', schema);