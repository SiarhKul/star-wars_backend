import fetch from 'node-fetch';

const handlerError = error => {
	return {
		error: error.message,
		detail: 'Not found',
	};
};

export const getHomePage = (req, res) => {
	res.send(`<h1>Custom server star-wars running...</h1>`);
};

export const getResources = async (req, res) => {
	const resours = req.originalUrl;

	try {
		const request = await fetch(`https://swapi.dev/api${resours}`);
		const json = await request.json();
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.status(200).json(json);
	} catch (error) {
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
		res.status(404).json(handlerError(error));
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
