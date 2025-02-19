import mongoose from "mongoose";

const MonthTicketPriceSchema = new mongoose.Schema({
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }, 
  busRouteId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const MonthTicketPriceModel = mongoose.model("MonthTicketPriceModel", MonthTicketPriceSchema, "monthTicketPrices");
export default MonthTicketPriceModel;