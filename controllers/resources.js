import fetch from 'node-fetch';
import { errorHandler } from '../utils/index.js';

export const getHomePage = async (req, res) => {
	res.send(`<h1>Custom server star-wars running...</h1>`);
};

export const getHomePage = (req, res) => {
	res.send(`<h1>Custom server star-wars running...</h1>`);
};

export const getResources = async (req, res) => {
	const resours = req.originalUrl;
	try {
		const request = await fetch(`https://swapi.dev/api${resours}`);
		const json = await request.json();
		res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(json);
	} catch (error) {
		res.status(404).json(errorHandler(error));
	}
};

export const getSpecialResources = resours => {
	return async (req, res) => {
		const param = req.params.id;
		try {
			const request = await fetch(`https://swapi.dev/api/${resours}/${param}/`);
			const json = await request.json();
			res.status(200).json(json);
		} catch (error) {
			res.status(404).json(handlerError(error));
		}
	};
};
