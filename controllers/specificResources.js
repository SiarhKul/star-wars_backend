import { errorHandler } from '../utils/index.js';
import config from 'config';
import chalk from 'chalk';
import PeopleModel from '../models/People.js';
import FilmsModel from '../models/Films.js';
import StarshipsModel from '../models/Starships.js';
import VehiclesModel from '../models/Vehicles.js';
import SpaciestModel from '../models/Species.js';
import PlanetsModel from '../models/Planets.js';

const PORT = config.get('port');
const URL = config.get('url');

export const getSpecificPerson = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };
	try {
		const person = await PeopleModel.find(query, option);
		if (person.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...person);
		}
	} catch (error) {
		res
			.status(404)
			.setHeader('Access-Control-Allow-Origin', '*')
			.json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};

export const getSpecificFilm = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };

	try {
		const film = await FilmsModel.find(query, option);
		if (film.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...film);
		}
	} catch (error) {
		res.status(404).json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};

export const getSpecificStarhip = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };

	try {
		const starships = await StarshipsModel.find(query, option);
		if (starships.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...starships);
		}
	} catch (error) {
		res.status(404).json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};

export const getSpecificVehicle = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };

	try {
		const vehicle = await VehiclesModel.find(query, option);

		if (vehicle.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...vehicle);
		}
	} catch (error) {
		res.status(404).json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};

export const getSpecificSpace = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };

	try {
		const space = await SpaciestModel.find(query, option);

		if (space.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...space);
		}
	} catch (error) {
		res.status(404).json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};

export const getSpecificPlanet = async (req, res) => {
	const query = { url: `${URL}${PORT}${req.originalUrl}` };
	const option = { __v: 0, _id: 0 };

	try {
		const palanet = await PlanetsModel.find(query, option);

		if (palanet.length === 0) {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json({ message: 'No such component' });
		} else {
			res
				.setHeader('Access-Control-Allow-Origin', '*')
				.status(200)
				.json(...palanet);
		}
	} catch (error) {
		res.status(404).json(errorHandler(error));
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);
	}
};
