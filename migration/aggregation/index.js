export const updateCreatedDate = { $set: { created: new Date() } };
export const updateEditedDate = { $set: { edited: new Date() } };
export const changeUrlResource = [
	{
		$set: {
			starships: {
				$map: {
					input: '$starships',
					as: 'v',
					in: {
						$replaceOne: {
							input: '$$v',
							find: 'api',
							replacement: '222222',
						},
					},
				},
			},
		},
	},
];
