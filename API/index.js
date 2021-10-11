import fetch from 'node-fetch';

export const getAllResources = async (objResources) => {
  const urls = Object.values(objResources);
  const allResources = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  return allResources;
};
