export const getSpecificResources = resours => {
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
