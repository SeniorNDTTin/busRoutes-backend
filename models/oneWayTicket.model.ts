import mongoose from "mongoose";

const OneWayTicketSchema = new mongoose.Schema({}, { timestamps: true });

const OneWayTicketModel = mongoose.model("OneWayTicketModel", OneWayTicketSchema, "oneWayTickets");
export default OneWayTicketModel;