import { errorHandler, getNextPrevUrl } from '../utils/index.js';
import chalk from 'chalk';
import config from 'config';
import PeopleModel from '../models/People.js';
import FilmsModel from '../models/Films.js';
import StarshipsModel from '../models/Starships.js';
import VehiclesModel from '../models/Vehicles.js';
import SpaciestModel from '../models/Species.js';
import PlanetsModel from '../models/Planets.js';

const PORT = config.get('port');
const URL = config.get('url');

export const getPeopleResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const peopleCollection = await PeopleModel.find();
		const amountPeopleInDB = peopleCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountPeopleInDB
		);

		const peopleResponced = await PeopleModel.find()
			.sort({ name: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountPeopleInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [peopleResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};

export const getFilmsResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const filmsCollection = await FilmsModel.find();
		const amountFilmsInDB = filmsCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountFilmsInDB
		);

		const filmsResponced = await FilmsModel.find()
			.sort({ title: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountFilmsInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [filmsResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};

export const getStarshipsResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const starshipsCollection = await StarshipsModel.find();
		const amountStarshipsInDB = starshipsCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountStarshipsInDB
		);

		const starshipsResponced = await StarshipsModel.find()
			.sort({ title: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountStarshipsInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [starshipsResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};

export const getVehiclesResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const vehiclesCollection = await VehiclesModel.find();
		const amountVehiclesInDB = vehiclesCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountVehiclesInDB
		);

		const vehiclesResponced = await VehiclesModel.find()
			.sort({ name: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountVehiclesInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [vehiclesResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};

export const getSpeciesResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const speciesCollection = await SpaciestModel.find();
		const amountSpeciesInDB = speciesCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountSpeciesInDB
		);

		const speciesResponced = await SpaciestModel.find()
			.sort({ name: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountSpeciesInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [speciesResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};

export const getPlanetsResources = async (req, res) => {
	const {
		query,
		_parsedUrl: { pathname },
	} = req;

	try {
		const planetsCollection = await PlanetsModel.find();
		const amountPlanetsInDB = planetsCollection.length;

		const nextPrevPage = getNextPrevUrl(
			query,
			PORT,
			URL,
			pathname,
			amountPlanetsInDB
		);

		const speciesResponced = await PlanetsModel.find()
			.sort({ name: 1 })
			.limit(nextPrevPage.perPage)
			.skip(nextPrevPage.perPage * nextPrevPage.page);

		const resGenerated = {
			amountPage: nextPrevPage.amountPage,
			count: amountPlanetsInDB,
			next: nextPrevPage.nextUrl,
			previous: nextPrevPage.prevUrl,
			results: [speciesResponced],
		};

		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.status(200)
			.json(resGenerated);
	} catch (error) {
		console.log(
			chalk.black.bgRedBright.bold('Error migration database', error)
		);

		res.status(404).json(errorHandler(error));
	}
};
