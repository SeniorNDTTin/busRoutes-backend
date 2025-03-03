import mongoose from "mongoose";
import { ETicketDetailType } from "../enums/ticketDetail.enum";

const TicketDetailSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: Object.values(ETicketDetailType),
    required: true
  },
  date: {
    type: String,
    required: true
  },
  ticketId: {
    type: String,
    required: true
  },
  scheduleId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const TicketDetailModel = mongoose.model("TicketDetailModel", TicketDetailSchema, "ticketDetails");
export default TicketDetailModel;