import fetch from 'node-fetch';
import chalk from 'chalk';
import {
	convertDataBase,
	createUrl,
	errorHandler,
	fetchSpecificResources,
} from '../utils/index.js';
import { connectMongoose } from '../mongoDB/connectDB.js';

import PlanetsModel from '../models/Planets.js';
import FilmsModel from '../models/Films.js';
import PeopleModel from '../models/People.js';
import SpaciestModel from '../models/Species.js';
import VehiclesModel from '../models/Vehicles.js';
import StarshipsModel from '../models/Starships.js';

await connectMongoose();

const getSpecificResources = async (url, model) => {
	console.log(chalk.yellow('Database has been migrated -----', url));
	const request = await fetch(url);
	const { count, results } = await request.json();
	const amountPage = Math.ceil(count / results.length);

	const urls = createUrl(amountPage, url);

	const specificResources = await fetchSpecificResources(urls);
	const newSpecificResources = convertDataBase(specificResources);
	await model.insertMany(newSpecificResources);
};

const migration = async () => {
	try {
		console.log(chalk.black.bgGreenBright('Starting migration database'));

		await getSpecificResources('https://swapi.dev/api/people/', PeopleModel);
		await getSpecificResources('https://swapi.dev/api/films/', FilmsModel);
		await getSpecificResources('https://swapi.dev/api/planets/', PlanetsModel);
		await getSpecificResources('https://swapi.dev/api/species/', SpaciestModel);
		await getSpecificResources(
			'https://swapi.dev/api/starships/',
			StarshipsModel
		);
		await getSpecificResources(
			'https://swapi.dev/api/vehicles/',
			VehiclesModel
		);

		console.log(chalk.black.bgGreenBright('Finishing migration database'));
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
		errorHandler(error);
	}
};

migration();
