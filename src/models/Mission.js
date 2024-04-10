import { Schema } from "mongoose";


export const MissionSchema = new Schema({
  codename: { type: String, minLength: 5, maxLength: 100, required: true },
  objective: { type: String, minLength: 1, maxLength: 500, required: true },
  year: { type: String, minLength: 1, maxLength: 100, required: true },
  locationId: { type: Schema.ObjectId, ref: 'Location' },
  ratId: { type: Schema.ObjectId, ref: 'Account' },
  completed: { type: Boolean, required: true, default: false },
}, {
  toJSON: { virtuals: true }
})

MissionSchema.virtual('rat', {
  localField: 'ratId',
  ref: 'Rat',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('location', {
  localField: 'locationId',
  ref: 'Location',
  foreignField: '_id',
  justOne: true
})