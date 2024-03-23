import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  approvalStatus: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  }
});

const User = mongoose.model('User', userSchema);

export default User;