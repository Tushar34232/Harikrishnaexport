import mongoose from 'mongoose';

const { Schema } = mongoose;

const userLogSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
   username: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const UserLog = mongoose.model('UserLog', userLogSchema);

export default UserLog;
