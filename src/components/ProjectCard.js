import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { colorSchemes } from '../utils/colorSchemes';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const Icon = project.icon;
    const colorScheme = colorSchemes[project.color] || colorSchemes.default;

    const sizeClasses = {
        small: "col-span-1 row-span-1",
        medium: "col-span-1 row-span-2",
        wide: "col-span-2 row-span-1",
        tall: "col-span-1 row-span-3",
    };

    const titleSizeClasses = {
        small: "text-lg",
        medium: "text-xl",
        wide: "text-xl",
        tall: "text-2xl",
    };

    const contentClasses = {
        small: "text-sm",
        medium: "text-base",
        wide: "text-base",
        tall: "text-lg",
    };

    return (
        <motion.div
            className={`${sizeClasses[project.size]}`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className={`h-full ${colorScheme.background} ${colorScheme.text} flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                {project.image ? (
                    <div className="relative h-1/3 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                            <Icon className="h-6 w-6" />
                            <CardTitle className={`${titleSizeClasses[project.size]} truncate ml-2`}>
                                {project.title}
                            </CardTitle>
                        </div>
                    </div>
                ) : (
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <Icon className="h-6 w-6" />
                            <CardTitle className={`${titleSizeClasses[project.size]} truncate ml-2`}>
                                {project.title}
                            </CardTitle>
                        </div>
                    </CardHeader>
                )}
                <CardContent className={`flex-grow ${contentClasses[project.size]} py-4`}>
                    <CardDescription className={`${colorScheme.description} text-sm mb-2`}>
                        {project.student}
                    </CardDescription>
                    <p className="text-sm font-semibold mb-2">{project.category}</p>
                    <p className="mt-2 line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                    <Button
                        className={`${colorScheme.button} w-full group flex items-center justify-center gap-2 transition-all duration-300 ease-in-out`}
                        onClick={() => window.open(project.url, "_blank")}
                    >
                        View Project
                        <FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default ProjectCard;
