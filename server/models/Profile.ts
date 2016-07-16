import { mongoose } from '../server';

const ProfileSchema = new mongoose.Schema({
	name: String,
	created: Date,
	age: Number,
	image: String,
	interests: [{type: mongoose.Schema.Types.ObjectId, ref: 'Interest'}],
	favoriteFood: String,
	id: Number
});

export const Profile = mongoose.model('Profile', ProfileSchema);