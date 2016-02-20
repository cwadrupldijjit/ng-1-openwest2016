interface ProfileInterface {
	name: string;
	age: number;
	image: string;
	interests: string[];
	favoriteFood: string;
	id: number;
}

let profiles: ProfileInterface[] = [
	{
		name: 'Sam Skeen',
		age: 23,
		image: '',
		interests: [
			'music',
			'drawing',
			'3d art',
			'Star Wars'
		],
		favoriteFood: 'Baked Mac & Cheese',
		id: 75
	},
	{
		name: 'Jeff Hanson',
		age: 32,
		image: '',
		interests: [
			'react',
			'swimming',
			'running',
			'health'
		],
		favoriteFood: 'Coconut-Lime Protein Shake',
		id: 97
	},
	{
		name: 'Leena Mumph',
		age: 19,
		image: '',
		interests: [
			'hair styling',
			'baking',
			'marbles',
			'Star Trek'
		],
		favoriteFood: 'Devil\'s Food Cake',
		id: 105
	}
];

export { profiles };