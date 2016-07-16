import * as express from 'express';

import { getMe,
		 getCurrent,
		 postNewProfile,
		 getOne,
		 postNewInterest,
		 deleteInterest } from './controllers/ProfilesController';

function router(app: express.Express) {
	app.get('/api/profiles/me', getMe);
	
	app.get('/api/profiles/current', getCurrent);
	
	app.post('/api/profiles/add', postNewProfile);
	
	app.get('/api/profiles/:id', getOne);
	
	app.post('/api/profiles/:id/interests', postNewInterest);
	
	app.delete('/api/profiles/:id/interests', deleteInterest);
}

export { router };