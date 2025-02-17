import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
  licensePlate: {
    type: String, 
    required: true,
    unique: true
  },
  chairQuantity: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const BusModel = mongoose.model("BusModel", BusSchema, "buses");
export default BusModel;
