import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const descriptionSchemas = {
	type: String,
	required: true,
};

const schema = new Schema({
	birth_year: descriptionSchemas,
	eye_color: descriptionSchemas,
	gender: descriptionSchemas,
	hair_color: descriptionSchemas,
	height: descriptionSchemas,
	mass: descriptionSchemas,
	name: descriptionSchemas,
	skin_color: descriptionSchemas,
	created: descriptionSchemas,
	edited: descriptionSchemas,
	homeworld: [String],
	films: [String],
	species: [String],
	starships: [String],
	url: [String],
	vehicles: [String],
});

const People = model('People', schema);

export default People;
