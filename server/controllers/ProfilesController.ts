import * as express from 'express';

import { Profile } from '../models/Profile';
import { Interest } from '../models/Interest';

interface IProfile {
	name: string;
	age: number;
	image: string;
	interests: IInterest[];
	favoriteFood: string;
	_id: string;
}

interface IInterest {
	_doc: {
		_id: {id: string};
	};
	name: string;
	_id: string;
	id: string|number;
}

export const getMe = (req: express.Request, res: express.Response) => {
	Profile
		.findById('5787f76545c37ca418802ac7')
		.exec()
		.then((data) => {
			res.json(data);
		}, (err) => {
			res.status(500).json(err);
		});
};
export const getCurrent = (req: express.Request, res: express.Response) => {
	Profile
		.find({_id: {$ne: '5787f76545c37ca418802ac7'}})
		.exec()
		.then((data) => {
			res.json(data);
		}, (err) => {
			res.status(500).json(err);
		});
};
export const getOne = (req: express.Request, res: express.Response) => {
	Profile
		.findById(req.params.id)
		.populate('interests')
		.exec((err, profile) => {
			if (err) {
				return res.status(500).json(err);
			}
			
			if (!profile) {
				return res.status(404).json({message: 'Unable to locate profile with id ' + req.params.id})
			}
			
			res.json(profile);
		})
		.then((data) => {
			res.json(data);
		}, (err) => {
			res.status(500).json(err);
		});
};

export const postNewProfile = (req: express.Request, res: express.Response) => {
	let { name, age, image, interests, favoriteFood } = <IProfile>req.body;
	
	image = image || '/common-assets/generic-avatar.png';
	
	let interestPromiseList = interests.map((interest) => {
		let newInterest = new Interest(interests[0]);
		
		return newInterest.save<IInterest>();
	});
	
	Promise.all<IInterest>(interestPromiseList)
		.then((interests) => {
			let interestList = interests.map((interest) => interest._doc._id);
			
			let newProfile = new Profile({name, age, interests: interestList, image, favoriteFood});
			
			newProfile.save((err, profile) => {
				if (err) {
					return res.status(500).json(err);
				}
				
				if (!profile) {
					return res.status(404).json({message: 'Unable to post new profile'});
				}
				
				res.json(profile);
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
};

export const postNewInterest = (req: express.Request, res: express.Response) => {
	let newInterest = new Interest(req.body);
	let newInterestId: string;
	
	newInterest.save()
		.then((interest) => {
			if (!interest) {
				res.status(404).send(`Something went wrong while trying to save the interest with the name ${req.body.name}`);
				return;
			}
			
			res.json(interest);
		}, (err) => {
			res.status(500).json(err);
		});
	
	// let profileArr = profiles.filter((value) => {
	// 	if (value.id == req.params.id) {
	// 		return true;
	// 	}
		
	// 	return false;
	// });
	
	
	// if (!profileArr[0]) {
	// 	let error = new Error('Could not find profile');
	// 	return res.status(404).send(error);
	// }
	
	// let interest: string;
	
	// if (req.body.interest) {
	// 	interest = req.body.interest;
	// } else if (req.text) {
	// 	interest = req.text;
	// }
	
	// console.log('new interest for profile %s', req.params.id, interest);
	
	// if (req.query.index) {
	// 	profileArr[0].interests[req.query.index] = interest;
	// } else {
	// 	profileArr[0].interests.push(interest);
	// }
	
	// res.json(interest);
};

export const deleteInterest = (req: express.Request, res: express.Response) => {
	// Profile
	// 	.remove({id: req.params.id})
	// 	.exec()
	// 	.then((data) => {
	// 		res.json(data);
	// 	}, (err) => {
	// 		res.status(500).json(err);
	// 	});
		
	// let profileArr = profiles.filter((value) => {
	// 	if (value.id == req.params.id) {
	// 		return true;
	// 	}
		
	// 	return false;
	// });
	
	// if (!profileArr[0]) {
	// 	let error = new Error('Could not find profile');
	// 	return res.status(404).send(error);
	// }
	
	// console.log('deleting interest from profile %s', req.params.id, req.query.q);
	// let profileIndex = profiles.indexOf(profileArr[0]);
	// if (profileIndex !== -1) {
	// 	let interestIndex = profiles[profileIndex].interests.indexOf(req.query.q);
		
	// 	profiles[profileIndex].interests.splice(interestIndex, 1);
	// }
	
	// res.json([req.query.interest]);
}