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
		image: '/common-assets/my-avatar.jpg',
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
		image: '/common-assets/jeff-avatar.png',
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
		image: '/common-assets/leena-avatar.png',
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