import mongoose from "mongoose";

const OneWayTicketPriceSchema = new mongoose.Schema({
  maxKilometer: {
    type: Number,
    required: true
  },
  unitPrice: {
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

const OneWayTicketPriceModel = mongoose.model("OneWayTicketPriceModel", OneWayTicketPriceSchema, "oneWayTicketPrices");
export default OneWayTicketPriceModel;