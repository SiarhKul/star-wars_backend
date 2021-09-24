import fetch from 'node-fetch';
import People from '../models/resources.js';
import chalk from 'chalk';
import { errorHandler } from '../utils/index.js';
import { getAllResources } from '../API/index.js';
import { connectMongoose } from '../mongoDB/connectDB.js';
import {
	changeUrlResource,
	updateCreatedDate,
	updateEditedDate,
} from './aggregation/index.js';

await connectMongoose();

const getSpecificResources = async urls => {
	const resourcesCollection = [];

	const request = await fetch(urls);
	const { count, results, next } = await request.json();

	const amountPage = Math.ceil(count / results.length);
	const url = next.replace(/\d+$/, '');

	const arrUrls = Array.from(
		{ length: amountPage },
		(v, i) => `${url}${i + 1}`
	);

	const res = await Promise.all(
		arrUrls.map(url =>
			fetch(url)
				.then(resp => resp.json())
				.then(data => data.results)
		)
	);

	resourcesCollection.push(...res.flat());
	return resourcesCollection;
};

const migration = async () => {
	try {
		// const requestAllUrls = await fetch(`https://swapi.dev/api`);
		// const allUrls = await requestAllUrls.json();
		// const resources = await getAllResources(allUrls);

		const specificResource = await getSpecificResources(
			`https://swapi.dev/api/people`
		);
		console.log('----------- - specificResource', specificResource);

		// await People.insertMany(specificResource);
		// await People.updateMany({}, updateCreatedDate);
		// await People.updateMany({}, updateEditedDate);
		// await People.updateMany({}, changeUrlResource);

		console.log(chalk.bgGreenBright('Success migration database'));
	} catch (error) {
		console.log(chalk.bgRedBright('Error migration database'));
		console.log(chalk.bgRedBright(error));
		errorHandler(error);
	}
};

migration();
