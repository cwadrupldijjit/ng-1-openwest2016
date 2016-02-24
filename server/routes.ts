import express = require('express');

import { profiles } from './db';

function router(app) {
	app.get('/api/profiles/me', (req, res) => {
		console.log('get me', profiles[0]);
		res.json(profiles[0]);
	});	
	
	app.get('/api/profiles/current', (req, res) => {
		let tempArr = profiles.slice(1);
		console.log('get current', tempArr);
		res.json(tempArr);
	});
	
	app.post('/api/profiles/add', (req, res) => {
		req.body.id = profiles[profiles.length - 1].id + 1;
		req.body.image = '/common-assets/generic-avatar.png';
		profiles.push(req.body);
		console.log('new profile', req.body);
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
		console.log('get profile with id of %s', req.params.id, profileArr[0]);
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
		
		let interest: string;
		
		if (req.body.interest) {
			interest = req.body.interest;
		} else if (req.text) {
			interest = req.text;
		}
		
		console.log('new interest for profile %s', req.params.id, interest);
		
		if (req.query.index) {
			profileArr[0].interests[req.query.index] = interest;
		} else {
			profileArr[0].interests.push(interest);
		}
		
		res.json(interest);
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
		
		console.log('deleting interest from profile %s', req.params.id, req.query.q);
		let profileIndex = profiles.indexOf(profileArr[0]);
		if (profileIndex !== -1) {
			let interestIndex = profiles[profileIndex].interests.indexOf(req.query.q);
			
			profiles[profileIndex].interests.splice(interestIndex, 1);
		}
		
		res.json([req.query.interest]);
	});
}

export { router };