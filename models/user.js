// models/User.js

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  dob: String,
  email: String,
  gender: String,
  contact: String,
  address: String,
  faculty: String,
  department: String,
  startYear: String,
  endYear: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: String
});

// Optional: hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

module.exports =mongoose.models.User || mongoose.model('User', userSchema);
