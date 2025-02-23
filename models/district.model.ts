import mongoose from "mongoose";

const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const DistrictModel = mongoose.model("DistrictModel", DistrictSchema, "districts");
export default DistrictModel;