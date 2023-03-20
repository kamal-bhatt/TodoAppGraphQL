const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  address: {
    city: String,
    street: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});
const User = mongoose.model('Users', userSchema);
module.exports = User;