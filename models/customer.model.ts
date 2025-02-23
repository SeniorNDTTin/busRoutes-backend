import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const CustomerModel = mongoose.model("CustomerModel", CustomerSchema, "customers");
export default CustomerModel;