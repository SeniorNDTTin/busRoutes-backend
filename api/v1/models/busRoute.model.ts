
import mongoose from "mongoose";

const busRouteSchema = new mongoose.Schema({
  name: {type: String,required: true},
  fullDistance: {type: Number , require : true},
  fullPrice: {type: Number , require: true},
  time: {type: String , require: true },
  firstFlightStartTime: {type: String , require: true},
  lastFlightStartTime:{type: String, require: true},
  TimeBetweenTwoFlight:{type: String , require: true}

}, {
  timestamps: true
});

const busRouteModel = mongoose.model("busRouteModel", busRouteSchema, "busRoutes");
export default busRouteModel ;