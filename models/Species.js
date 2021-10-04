import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const descriptionSchemas = {
	type: String,
};

const schema = new Schema({
	name: descriptionSchemas,
	classification: descriptionSchemas,
	designation: descriptionSchemas,
	average_height: descriptionSchemas,
	average_lifespan: descriptionSchemas,
	created: descriptionSchemas,
	hair_colors: descriptionSchemas,
	skin_colors: descriptionSchemas,
	language: descriptionSchemas,
	homeworld: descriptionSchemas,
	people: [String],
	films: [String],
	url: descriptionSchemas,
	edited: descriptionSchemas,
	eye_colors: descriptionSchemas,
});

const SpaciestModel = model('Species', schema);
export default SpaciestModel;
