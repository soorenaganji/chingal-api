import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: String,
  country: String,
  city: String,
  street: String,
  zipCode: Number,
  dateOfBirth: {
type : Date ,
required : true
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: { type: Date, default: () => Date.now() },
});

const User = models.User || model("User", UserSchema);

export default User;