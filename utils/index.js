/* eslint-disable guard-for-in */
import fetch from 'node-fetch';

// ---------------------MIGRATION
export const createUrl = (amountPage, url) => Array.from({ length: amountPage }, (_, i) => `${url}?page=${i + 1}`);

export const fetchSpecificResources = async (urls) => {
  const specificResources = await Promise.all(
    urls.map((url) => fetch(url)
      .then((resp) => resp.json())
      .then((data) => data.results)),
  ).then((resp) => resp.flat());

  return specificResources;
};

export const convertDataBase = (convertedResources, PORT, URL, MUTABLE_HOST) => {
  const newResourcesCollection = convertedResources.map((resours) => {
    for (const key in resours) {
      // if (Array.isArray(resours[key])) {
      // resours[key] = resours[key].map(a => a.replace(MUTABLE_HOST, `${URL}${PORT}`));
      // }

      if (key === 'url' && typeof resours[key] === 'string') {
        resours.url = resours[key].replace(MUTABLE_HOST, `${URL}${PORT}`);
      }

      if (key === 'created' && typeof resours[key] === 'string') {
        resours[key] = String(new Date());
      }

      if (key === 'edited' && typeof resours[key] === 'string') {
        resours[key] = String(new Date());
      }

      if (key === 'homeworld' && typeof resours[key] === 'string') {
        resours[key] = resours[key].replace(MUTABLE_HOST, `${URL}${PORT}`);
      }
    }
    return { ...resours };
  });
  return newResourcesCollection;
};

// ---------------------COMMON
export const errorHandler = (error) => ({
  error: error.message,
  detail: 'Not found',
});

export const getPagination = (query, PORT, URL, pathname, amountFilmsInDB) => {
  const perPage = 4;
  const possibleAmountPage = Math.ceil(amountFilmsInDB / perPage);
  const isEmptyQuery = Object.keys(query).length === 0;
  const queryPage = parseInt(query.page, 10);
  const hasQueryNil = parseInt(query.page, 10) === 0;
  const url = `${URL}${PORT}${pathname}`;

  if (isEmptyQuery || hasQueryNil) {
    return {
      amountPage: possibleAmountPage,
      perPage,
      page: 0,
      prevUrl: null,
      nextUrl: `${url}?page=2`,
    };
  }

  if (possibleAmountPage === queryPage) {
    return {
      amountPage: possibleAmountPage,
      perPage,
      page: query.page - 1,
      prevUrl: `${url}?page=${queryPage - 1}`,
      nextUrl: null,
    };
  }

  return {
    amountPage: possibleAmountPage,
    perPage,
    page: query.page - 1,
    prevUrl: `${url}?page=${queryPage - 1}`,
    nextUrl: `${url}?page=${queryPage + 1}`,
  };
};
