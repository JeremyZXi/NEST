export const categoriesData = [
    {
        id: 'cat1',
        name: 'Overview',
        subcategories: [
            {
                id: 'partners',
                name: 'NEST Partners',
                items: [
                    {
                        logo: '/path-to-logo1.png',
                        name: '食尚 | Health and Wellness',
                        email: 'partner1@example.com',
                        description: 'Empowering People for a Safe, Healthy, Sustainable Present and Future<br>' +
                            '赋能安全、健康、可持续的当下与未来<br>' +
                            'Health and Wellness is dedicated to promoting a natural, ecological, sustainable, and healthy lifestyle.\n' +
                            'Through workshops and seminars, we support organic farmers and raise public awareness of healthy and mindful eating, fostering a stronger connection between farm and table.\n' +
                            'We focus on empowering underserved communities to enhance self-sufficiency and fund educational initiatives through charitable activities, fostering overall community well-being, food safety, food security, and sustainability.<br>' +
                            '食食尚致力于促进自然、生态、可持续和健康的生活方式。通过研讨会和实践工作\n' +
                            '坊，支持生态种植践行者和农民并提高公众对健康饮食的意识。我们特别关注需要\n' +
                            '帮助的群体，帮助他们提升自给自足能力，并通过慈善活动资助教育项目，推动社区的全面健康发展。'
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