import config from 'config';

const PORT = config.get('port');
const URL = config.get('url');

const host = `${URL}${PORT}`;

export const updateCreatedDate = { $set: { created: new Date() } };
export const updateEditedDate = { $set: { edited: new Date() } };

export const changeUrlResource = inputResource => {
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
								find: 'https://swapi.dev/api',
								replacement: `${host}`,
							},
						},
					},
				},
			},
		},
	];
};
