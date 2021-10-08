import config from 'config';

const PORT = config.get('port');
const URL = config.get('url');
const ORIGIN_HOST = config.get('originHost');
//export const updateCreatedDate = { $set: { created: new Date() } };
// export const updateEditedDate = { $set: { edited: new Date() } };

export const aggregateUrlsResources = inputResource => {
	return [
		{
			$set: {
				[inputResource]: {
					$map: {
						input: `$${inputResource}`,
						as: 'v',
						in: {
							$replaceOne: {
								input: '$$v',
								find: `${ORIGIN_HOST}`,
								replacement: `${URL}${PORT}`,
							},
						},
					},
				},
			},
		},
	];
};

export const aggregateUrlResource = keyObj => {
	return [
		{
			$set: {
				[keyObj]: {
					$replaceOne: {
						input: `$${keyObj}`,
						find: `${ORIGIN_HOST}`,
						replacement: `${URL}${PORT}`,
					},
				},
			},
		},
	];
};
