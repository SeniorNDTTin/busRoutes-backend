
import mongoose from "mongoose";

const busRouteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fullDistance: {
    type: Number,
    required: true
  },
  fullPrice: {
    type: Number,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  firstFlightStartTime: {
    type: String,
    required: true
  },
  lastFlightStartTime: {
    type: String,
    required: true
  },
  timeBetweenTwoFlight: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const busRouteModel = mongoose.model("busRouteModel", busRouteSchema, "busRoutes");
export default busRouteModel;