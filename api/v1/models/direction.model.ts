import mongoose from "mongoose";

const DirectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const DirectionModel = mongoose.model("DirectionModel", DirectionSchema, "directions");
export default DirectionModel;