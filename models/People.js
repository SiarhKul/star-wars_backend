import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const descriptionSchemas = {
	type: String,
};

const schema = new Schema({
	name: descriptionSchemas,
	birth_year: descriptionSchemas,
	eye_color: descriptionSchemas,
	gender: descriptionSchemas,
	hair_color: descriptionSchemas,
	height: descriptionSchemas,
	mass: descriptionSchemas,
	skin_color: descriptionSchemas,
	homeworld: descriptionSchemas,
	films: [String],
	species: [String],
	starships: [String],
	vehicles: [String],
	url: descriptionSchemas,
	edited: descriptionSchemas,
	created: descriptionSchemas,
});

const PeopleModel = model('People', schema);

export default PeopleModel;
