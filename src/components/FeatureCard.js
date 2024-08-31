import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const FeatureCard = ({ icon: Icon, title, description }) => (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
            <Icon className="w-12 h-12 text-blue-500 mb-4" />
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-gray-600">{description}</p>
        </CardContent>
    </Card>
);

export default FeatureCard;
