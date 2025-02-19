import mongoose from "mongoose";

const busStopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  streetId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const BusStopModel = mongoose.model("BusStopModel", busStopSchema, "busStops");
export default BusStopModel;