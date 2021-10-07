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

router.get('/people', getPeopleResources);
router.get('/films', getFilmsResources);
router.get('/starships', getStarshipsResources);
router.get('/vehicles', getVehiclesResources);
router.get('/species', getSpeciesResources);
router.get('/planets', getPlanetsResources);

router.get('/people/:id/', getSpecificPerson);
router.get('/films/:id/', getSpecificFilm);
router.get('/starships/:id/', getSpecificStarhip);
router.get('/vehicles/:id/', getSpecificVehicle);
router.get('/species/:id/', getSpecificSpace);
router.get('/planets/:id/', getSpecificPlanet);

export default router;
