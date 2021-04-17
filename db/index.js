const mongoose = require('mongoose');
const { Schema, model } = mongoose;

mongoose.connect('mongodb://localhost/cowz', {
  useNewUrlParser: true, useUnifiedTopology: true
}, (err)=> {
    if (err) {
      console.log('error connecting to mongodb cowz')
    } else {
      console.log('connected to mongodb cowz!')
    }
});

const cowSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String,
  },
  weight: {
    type: Number
  }
});

const Cow = model('Cow', cowSchema);

module.exports.Cow = Cow;