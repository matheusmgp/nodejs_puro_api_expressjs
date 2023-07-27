const mongoose = require('mongoose');
const authService = require('../services/auth.service');
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
  }
);
UserSchema.pre('save', async function () {
  if (!this.password || !this.isModified('password')) {
    return;
  }
  try {
    this.password = await authService.hashPassword(this.password);
  } catch (err) {
    console.error(`Error hashing the password for the user ${this.name}`);
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
