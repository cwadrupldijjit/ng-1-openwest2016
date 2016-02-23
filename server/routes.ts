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
	
	app.post('/api/profiles/add', (req, res) => {
		req.body.id = profiles[profiles.length - 1].id + 1;
		req.body.image = '/common-assets/generic-avatar.png';
		profiles.push(req.body);
		res.json(req.body);
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
	
	app.post('/api/profiles/:id/interests', (req, res) => {
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
		
		if (req.query.index) {
			profileArr[0].interests[req.query.index] = req.body.interest;
		} else {
			profileArr[0].interests.push(req.body.interest);
		}
		
		res.json(req.body);
	});
	
	app.delete('/api/profiles/:id/interests', (req, res) => {
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
		
		let profileIndex = profiles.indexOf(profileArr[0]);
		if (profileIndex !== -1) {
			let interestIndex = profiles[profileIndex].interests.indexOf(req.body.interest);
		}
		
		res.json(req.body);
	});
}

export { router };