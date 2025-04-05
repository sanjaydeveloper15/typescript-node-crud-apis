import { Schema, InferSchemaType, model } from 'mongoose';
import { ROLE } from '../utils/constants/common.constant.js';

const userSchema = new Schema({
  name: { type: String, default: '', required: true },
  email: { type: String, default: '', unique: true, required: true, trim: true, lowercase: true },
  countryCode: { type: String, default: '', required: true },
  mobile: { type: String, required: true },
  dob: { type: Date },
  isActive: { type: Boolean, default: false },
  isPaid: { type: Boolean, default: false },
  isVerify: { type: Boolean, default: false },
  isFirstTime: { type: Boolean, default: true },
  password: { type: String, default: null, select: false },
  profileImage: { type: String, default: '' },
  employeeType: { type: String, default: '' },
  employeeQualification: { type: String, default: '' },
  address: { type: String, default: '' },
  userId: { type: Schema.Types.ObjectId, ref: 'users', default: null },
  adminId: { type: Schema.Types.ObjectId, ref: 'users', default: null },
  parentId: { type: Schema.Types.ObjectId, ref: 'users', default: null },
  superAdminId: { type: Schema.Types.ObjectId, ref: 'users', default: null },
  otp: { type: Number, default: null },
  role: {
    type: String,
    required: true,
    enum: Object.values(ROLE),
    index: true
  },
  logo: { type: String, default: '' },
  code: { type: String, default: '' },
  description: { type: String, default: '' },
  branch: { type: String, default: '' },
  isRemove: { type: Number, default: 0, select: false },
  deletedAt: { type: Date, default: null },
  // Auditing fields
  createdBy: { type: Schema.Types.ObjectId, ref: 'users' },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'users' },
  deletedBy: { type: Schema.Types.ObjectId, ref: 'users' },
}, {
  timestamps: true,
});

type User = InferSchemaType<typeof userSchema>; // helps to using detect all columns in project code automatcially

const userModel = model<User>('users', userSchema);

export default userModel;
