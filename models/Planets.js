import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schema = new Schema({
  name: { type: String },
  diameter: { type: String },
  rotation_period: { type: String },
  orbital_period: { type: String },
  gravity: { type: String },
  population: { type: String },
  climate: { type: String },
  terrain: { type: String },
  surface_water: { type: String },
  residents: [String],
  films: [String],
  url: { type: String },
  created: { type: String },
  edited: { type: String },
});

const PlanetsModel = model('Planets', schema);
export default PlanetsModel;
