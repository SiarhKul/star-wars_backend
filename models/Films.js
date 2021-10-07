import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const descriptionSchemas = {
	type: String,
};

const schema = new Schema({
	title: descriptionSchemas,
	episode_id: { type: Number },
	opening_crawl: descriptionSchemas,
	director: descriptionSchemas,
	producer: descriptionSchemas,
	release_date: descriptionSchemas,
	species: [String],
	starships: [String],
	vehicles: [String],
	characters: [String],
	planets: [String],
	created: descriptionSchemas,
	edited: descriptionSchemas,
	url: descriptionSchemas,
});

const FilmsModel = model('Films', schema);

export default FilmsModel;
