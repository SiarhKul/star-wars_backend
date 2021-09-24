import { Router } from 'express';
import {
	getResources,
	getSpecialResources,
	getHomePage,
} from '../controllers/resources.js';

const router = Router();

router.get('/', getHomePage);

router.get('/people', getResources);
router.get('/films', getResources);
router.get('/starships', getResources);
router.get('/vehicles', getResources);
router.get('/species', getResources);
router.get('/planets', getResources);

router.get('/people/:id', getSpecialResources('people'));
router.get('/films/:id', getSpecialResources('films'));
router.get('/starships/:id', getSpecialResources('starships'));
router.get('/vehicles/:id', getSpecialResources('vehicles'));
router.get('/species/:id', getSpecialResources('species'));
router.get('/planets/:id', getSpecialResources('planets'));

export default router;
