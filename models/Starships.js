import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const descriptionSchemas = {
  type: String,
};

const schema = new Schema({
  name: descriptionSchemas,
  model: descriptionSchemas,
  starship_class: descriptionSchemas,
  manufacturer: descriptionSchemas,
  cost_in_credits: descriptionSchemas,
  length: descriptionSchemas,
  crew: descriptionSchemas,
  passengers: descriptionSchemas,
  max_atmosphering_speed: descriptionSchemas,
  hyperdrive_rating: descriptionSchemas,
  MGLT: descriptionSchemas,
  cargo_capacity: descriptionSchemas,
  consumables: descriptionSchemas,
  films: [String],
  pilots: [String],
  url: descriptionSchemas,
  created: descriptionSchemas,
  edited: descriptionSchemas,
});

const StarshipsModel = model('Starships', schema);
export default StarshipsModel;
