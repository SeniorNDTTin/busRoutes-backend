import mongoose from "mongoose";

import IAddress from "../interfaces/address.interface";

export interface AddressDocument extends IAddress, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
};

const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  ward: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const AddressModel = mongoose.model<AddressDocument>("addresses", AddressSchema);
export default AddressModel;