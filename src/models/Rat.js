import { Schema } from "mongoose";

export const RatSchema = new Schema({
  name: { type: String, minLength: 5, maxLength: 100, required: true },
  callsign: { type: String, minLength: 1, maxLength: 25, required: true },
  picture: { type: String, minLength: 1, maxLength: 100, required: true },
  specialties: { type: [String], minLength: 1, maxLength: 100, required: true }
}, { toJSON: { virtuals: true } })