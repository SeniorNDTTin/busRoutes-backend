import mongoose from "mongoose";

const BusRouteDetailSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true
  },
  distancePre: {
    type: Number,
    required: true
  },
  busRouteId: {
    type: String,
    required: true
  },
  busStopId: {
    type: String,
    required: true
  },
  directionId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const BusRouteDetailModel = mongoose.model("BusRouteDetailModel", BusRouteDetailSchema, "busRouteDetails");
export default BusRouteDetailModel;