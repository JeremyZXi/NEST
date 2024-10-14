import categoriesData from "./catData";

export const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/feedback', label: 'Feedback' },
    {
        label: 'Members & Partners',
        subItems: categoriesData.map(category => ({
            to: `/${category.id}`,
            label: category.name,
        })),
    },
];
export default navLinks