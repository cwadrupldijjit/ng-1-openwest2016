"use strict";
var profiles = [
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
exports.profiles = profiles;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxJQUFJLFFBQVEsR0FBdUI7SUFDbEM7UUFDQyxJQUFJLEVBQUUsV0FBVztRQUNqQixHQUFHLEVBQUUsRUFBRTtRQUNQLEtBQUssRUFBRSw4QkFBOEI7UUFDckMsU0FBUyxFQUFFO1lBQ1YsT0FBTztZQUNQLFNBQVM7WUFDVCxRQUFRO1lBQ1IsV0FBVztTQUNYO1FBQ0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxFQUFFLEVBQUUsRUFBRTtLQUNOO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsYUFBYTtRQUNuQixHQUFHLEVBQUUsRUFBRTtRQUNQLEtBQUssRUFBRSxnQ0FBZ0M7UUFDdkMsU0FBUyxFQUFFO1lBQ1YsT0FBTztZQUNQLFVBQVU7WUFDVixTQUFTO1lBQ1QsUUFBUTtTQUNSO1FBQ0QsWUFBWSxFQUFFLDRCQUE0QjtRQUMxQyxFQUFFLEVBQUUsRUFBRTtLQUNOO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsYUFBYTtRQUNuQixHQUFHLEVBQUUsRUFBRTtRQUNQLEtBQUssRUFBRSxpQ0FBaUM7UUFDeEMsU0FBUyxFQUFFO1lBQ1YsY0FBYztZQUNkLFFBQVE7WUFDUixTQUFTO1lBQ1QsV0FBVztTQUNYO1FBQ0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxFQUFFLEVBQUUsR0FBRztLQUNQO0NBQ0Q7QUFFUSxnQkFBUSxZQUZmO0FBRWtCIiwiZmlsZSI6ImRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFByb2ZpbGVJbnRlcmZhY2Uge1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRhZ2U6IG51bWJlcjtcclxuXHRpbWFnZTogc3RyaW5nO1xyXG5cdGludGVyZXN0czogc3RyaW5nW107XHJcblx0ZmF2b3JpdGVGb29kOiBzdHJpbmc7XHJcblx0aWQ6IG51bWJlcjtcclxufVxyXG5cclxubGV0IHByb2ZpbGVzOiBQcm9maWxlSW50ZXJmYWNlW10gPSBbXHJcblx0e1xyXG5cdFx0bmFtZTogJ1NhbSBTa2VlbicsXHJcblx0XHRhZ2U6IDIzLFxyXG5cdFx0aW1hZ2U6ICcvY29tbW9uLWFzc2V0cy9teS1hdmF0YXIuanBnJyxcclxuXHRcdGludGVyZXN0czogW1xyXG5cdFx0XHQnbXVzaWMnLFxyXG5cdFx0XHQnZHJhd2luZycsXHJcblx0XHRcdCczZCBhcnQnLFxyXG5cdFx0XHQnU3RhciBXYXJzJ1xyXG5cdFx0XSxcclxuXHRcdGZhdm9yaXRlRm9vZDogJ0Jha2VkIE1hYyAmIENoZWVzZScsXHJcblx0XHRpZDogNzVcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdKZWZmIEhhbnNvbicsXHJcblx0XHRhZ2U6IDMyLFxyXG5cdFx0aW1hZ2U6ICcvY29tbW9uLWFzc2V0cy9qZWZmLWF2YXRhci5wbmcnLFxyXG5cdFx0aW50ZXJlc3RzOiBbXHJcblx0XHRcdCdyZWFjdCcsXHJcblx0XHRcdCdzd2ltbWluZycsXHJcblx0XHRcdCdydW5uaW5nJyxcclxuXHRcdFx0J2hlYWx0aCdcclxuXHRcdF0sXHJcblx0XHRmYXZvcml0ZUZvb2Q6ICdDb2NvbnV0LUxpbWUgUHJvdGVpbiBTaGFrZScsXHJcblx0XHRpZDogOTdcclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6ICdMZWVuYSBNdW1waCcsXHJcblx0XHRhZ2U6IDE5LFxyXG5cdFx0aW1hZ2U6ICcvY29tbW9uLWFzc2V0cy9sZWVuYS1hdmF0YXIucG5nJyxcclxuXHRcdGludGVyZXN0czogW1xyXG5cdFx0XHQnaGFpciBzdHlsaW5nJyxcclxuXHRcdFx0J2Jha2luZycsXHJcblx0XHRcdCdtYXJibGVzJyxcclxuXHRcdFx0J1N0YXIgVHJlaydcclxuXHRcdF0sXHJcblx0XHRmYXZvcml0ZUZvb2Q6ICdEZXZpbFxcJ3MgRm9vZCBDYWtlJyxcclxuXHRcdGlkOiAxMDVcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgeyBwcm9maWxlcyB9OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
