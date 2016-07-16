import { mongoose } from '../server';

const InterestSchema = new mongoose.Schema({
	name: String
});

export const Interest = mongoose.model('Interest', InterestSchema);