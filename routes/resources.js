import { Router } from 'express';
import {
	getPeopleResources,
	getFilmsResources,
	getStarshipsResources,
	getVehiclesResources,
	getSpeciesResources,
	getPlanetsResources,
} from '../controllers/resources.js';
import { getSpecificResources } from '../controllers/specificResources.js';
import { getHomePage } from '../controllers/welcome.js';

const router = Router();

router.get('/', getHomePage);

router.get('/people', getPeopleResources);
router.get('/films', getFilmsResources);
router.get('/starships', getStarshipsResources);
router.get('/vehicles', getVehiclesResources);
router.get('/species', getSpeciesResources);
router.get('/planets', getPlanetsResources);

router.get('/people/:id', getSpecificResources('people'));
router.get('/films/:id', getSpecificResources('films'));
router.get('/starships/:id', getSpecificResources('starships'));
router.get('/vehicles/:id', getSpecificResources('vehicles'));
router.get('/species/:id', getSpecificResources('species'));
router.get('/planets/:id', getSpecificResources('planets'));

export default router;
