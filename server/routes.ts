import express = require('express');

import { profiles } from './db';

function router(app) {
	app.get('/api/profiles/me', (req, res) => {
		res.json(profiles[0]);
	});	
	
	app.get('/api/profiles/current', (req, res) => {
		let tempArr = profiles.slice(1);
		
		res.json(tempArr);
	});
	
	app.get('/api/profiles/:id', (req, res) => {
		let profileArr = profiles.filter((value) => {
			if (value.id == req.params.id) {
				return true;
			}
			
			return false;
		});
		
		if (!profileArr[0]) {
			let error = new Error('Could not find profile');
			return res.status(404).send(error);
		}
		res.json(profileArr[0]);
	});
}

export { router };