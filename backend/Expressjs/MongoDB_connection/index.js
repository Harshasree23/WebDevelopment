const express = require('express');
const mongoose = require('mongoose');

(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/First');
  console.log('Mongo Connected');
})();

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', schema);

const app = express();

app.use( express.urlencoded({ extended:false }) );

app.post('/', async (req, res) => {

  const user = new User({ 
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    phone_number : req.body.phone_number,
    email : req.body.email,
  });
  await user.save();

  res.status(200).json({ message: 'User created successfully' });

});

app.listen(8000, () => console.log('Server started'));
