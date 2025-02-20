import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  },
  busId: {
    type: String,
    required: true
  },
  busRouteId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const ScheduleModel = mongoose.model("ScheduleModel", ScheduleSchema, "schedules");
export default ScheduleModel;