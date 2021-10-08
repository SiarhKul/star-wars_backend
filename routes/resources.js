import { Router } from 'express';
import {
	getPeopleResources,
	getFilmsResources,
	getStarshipsResources,
	getVehiclesResources,
	getSpeciesResources,
	getPlanetsResources,
} from '../controllers/resources.js';
import {
	getSpecificFilm,
	getSpecificPerson,
	getSpecificPlanet,
	getSpecificSpace,
	getSpecificStarhip,
	getSpecificVehicle,
} from '../controllers/specificResources.js';
import { getHomePage } from '../controllers/welcome.js';

const router = Router();

router.get('/', getHomePage);

router.get('/api/people', getPeopleResources);
router.get('/api/films', getFilmsResources);
router.get('/api/starships', getStarshipsResources);
router.get('/api/vehicles', getVehiclesResources);
router.get('/api/species', getSpeciesResources);
router.get('/api/planets', getPlanetsResources);

router.get('/api/people/:id/', getSpecificPerson);
router.get('/api/films/:id/', getSpecificFilm);
router.get('/api/starships/:id/', getSpecificStarhip);
router.get('/api/vehicles/:id/', getSpecificVehicle);
router.get('/api/species/:id/', getSpecificSpace);
router.get('/api/planets/:id/', getSpecificPlanet);

export default router;
