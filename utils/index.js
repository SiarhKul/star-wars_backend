export const errorHandler = error => {
	return {
		error: error.message,
		detail: 'Not found',
	};
};
