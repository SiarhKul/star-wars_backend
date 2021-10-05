import fetch from 'node-fetch';
import config from 'config';

const PORT = config.get('port');
const URL = config.get('url');
const ORIGINURL = config.get('originUrl');
const host = `${URL}${PORT}`;

//---------------------MIGRATION
export const createUrl = (amountPage, url) => {
	return Array.from({ length: amountPage }, (_, i) => `${url}?page=${i + 1}`);
};

export const fetchSpecificResources = async urls => {
	const specificResources = await Promise.all(
		urls.map(url =>
			fetch(url)
				.then(resp => resp.json())
				.then(data => data.results)
		)
	).then(resp => resp.flat());

	return specificResources;
};

export const convertDataBase = convertedResources => {
	const newResourcesCollection = convertedResources.map((resours, i) => {
		for (const key in resours) {
			if (Array.isArray(resours[key])) {
				resours[key] = resours[key].map(a => a.replace(ORIGINURL, `${host}`));
			}

			if (key === 'url' && typeof resours[key] === 'string') {
				resours['url'] = resours[key].replace(ORIGINURL, `${host}`);
			}

			if (key === 'created' && typeof resours[key] === 'string') {
				resours[key] = String(new Date());
			}

			if (key === 'edited' && typeof resours[key] === 'string') {
				resours[key] = String(new Date());
			}

			if (key === 'homeworld' && typeof resours[key] === 'string') {
				resours[key] = resours[key].replace(ORIGINURL, `${host}`);
			}
		}
		return { ...resours };
	});
	return newResourcesCollection;
};

//---------------------COMMON
export const errorHandler = error => {
	return {
		error: error.message,
		detail: 'Not found',
	};
};
