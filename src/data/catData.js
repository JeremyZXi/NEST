export const categoriesData = [
    {
        id: 'cat1',
        name: 'Category 1',
        subcategories: [
            {
                id: 'partners',
                name: 'NEST Partners',
                items: [
                    {
                        logo: '/path-to-logo1.png',
                        name: 'Partner 1',
                        email: 'partner1@example.com',
                        description: 'Description for Partner 1...'
                    },
                    // More partners...
                ]
            },
            {
                id: 'members',
                name: 'NEST Members',
                items: [
                    {
                        logo: '/path-to-logo2.png',
                        name: 'Member 1',
                        email: 'member1@example.com',
                        description: 'Description for Member 1...',
                        school: 'School 1'
                    },
                    // More members...
                ]
            }
        ]
    },
    {
        id: 'cat2',
        name: 'Category 2',
        subcategories: [
            {
                id: 'partners',
                name: 'Partners',
                items: [
                    // Partners for Category 2...
                ]
            },
            {
                id: 'members',
                name: 'Members',
                items: [
                    // Members for Category 2...
                ]
            }
        ]
    },
    // More main categories...
];

export default categoriesData