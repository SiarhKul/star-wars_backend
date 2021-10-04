import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const descriptionSchemas = {
	type: String,
};

const schema = new Schema({
	name: descriptionSchemas,
	model: descriptionSchemas,
	vehicle_class: descriptionSchemas,
	manufacturer: descriptionSchemas,
	length: descriptionSchemas,
	cost_in_credits: descriptionSchemas,
	crew: descriptionSchemas,
	passengers: descriptionSchemas,
	max_atmosphering_speed: descriptionSchemas,
	cargo_capacity: descriptionSchemas,
	consumables: descriptionSchemas,
	films: [String],
	pilots: [String],
	url: descriptionSchemas,
	created: descriptionSchemas,
	edited: descriptionSchemas,
});

const VehiclesModel = model('Vehicles', schema);

export default VehiclesModel;
