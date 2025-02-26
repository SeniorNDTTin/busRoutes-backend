import mongoose from "mongoose";

const MonthTicketSchema = new mongoose.Schema({
  registerDate: {
    type: String,
    required: true
  },
  expiredDate: {
    type: String,
    required: true
  },
  expired: {
    type: Boolean,
    required: true
  },
  customerId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const MonthTicketModel = mongoose.model("MonthTicketModel", MonthTicketSchema, "monthTickets");
export default MonthTicketModel;