import mongoose from "mongoose";

const StreetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  wardId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const StreetModel = mongoose.model("StreetModel", StreetSchema, "streets");
export default StreetModel;