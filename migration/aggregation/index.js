import config from 'config';

const PORT = config.get('port');
const URL = config.get('url');
const MUTABLE_HOST = config.get('mutableHost');
// export const updateCreatedDate = { $set: { created: new Date() } };
// export const updateEditedDate = { $set: { edited: new Date() } };

export const aggregateUrlsResources = (inputResource) => [
  {
    $set: {
      [inputResource]: {
        $map: {
          input: `$${inputResource}`,
          as: 'v',
          in: {
            $replaceOne: {
              input: '$$v',
              find: `${MUTABLE_HOST}`,
              replacement: `${URL}${PORT}`,
            },
          },
        },
      },
    },
  },
];

export const aggregateUrlResource = (keyObj) => [
  {
    $set: {
      [keyObj]: {
        $replaceOne: {
          input: `$${keyObj}`,
          find: `${MUTABLE_HOST}`,
          replacement: `${URL}${PORT}`,
        },
      },
    },
  },
];
