import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserProfileSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter a first name'
  },
  lastName: {
    type: String,
    required: 'Enter a last name'
  },
  email: String,
  phoneNumber: Number,
  createdDate: {
    type: Date,
    default: Date.now()
  }
});
