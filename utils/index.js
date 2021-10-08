import fetch from 'node-fetch';
import config from 'config';

const PORT = config.get('port');
const URL = config.get('url');
const ORIGIN_HOST = config.get('originHost');

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
			// if (Array.isArray(resours[key])) {
			// 	resours[key] = resours[key].map(a => a.replace(ORIGIN_HOST, `${URL}${PORT}`));
			// }

			if (key === 'url' && typeof resours[key] === 'string') {
				resours['url'] = resours[key].replace(ORIGIN_HOST, `${URL}${PORT}`);
			}

			if (key === 'created' && typeof resours[key] === 'string') {
				resours[key] = String(new Date());
			}

			if (key === 'edited' && typeof resours[key] === 'string') {
				resours[key] = String(new Date());
			}

			if (key === 'homeworld' && typeof resours[key] === 'string') {
				resours[key] = resours[key].replace(ORIGIN_HOST, `${URL}${PORT}`);
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

export const getPagination = (query, PORT, URL, pathname, amountFilmsInDB) => {
	const perPage = 4;
	const possibleAmountPage = Math.ceil(amountFilmsInDB / perPage);
	const isEmptyQuery = Object.keys(query).length === 0;
	const queryPage = parseInt(query.page);
	const hasQueryNil = parseInt(query.page) === 0;
	const url = `${URL}${PORT}${pathname}`;

	if (isEmptyQuery || hasQueryNil) {
		return {
			amountPage: possibleAmountPage,
			perPage: perPage,
			page: 0,
			prevUrl: null,
			nextUrl: `${url}?page=2`,
		};
	}

	if (possibleAmountPage === queryPage) {
		return {
			amountPage: possibleAmountPage,
			perPage: perPage,
			page: query.page - 1,
			prevUrl: `${url}?page=${queryPage - 1}`,
			nextUrl: null,
		};
	}

	return {
		amountPage: possibleAmountPage,
		perPage: perPage,
		page: query.page - 1,
		prevUrl: `${url}?page=${queryPage - 1}`,
		nextUrl: `${url}?page=${queryPage + 1}`,
	};
};
