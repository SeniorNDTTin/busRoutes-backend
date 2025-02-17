import mongoose from "mongoose";

const WardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  districtId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const WardModel = mongoose.model("WardModel", WardSchema, "wards");
export default WardModel;