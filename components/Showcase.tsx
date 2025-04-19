"use client";
import Image from "next/image";
import { useState } from "react";

export default function Showcase() {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            id: "project_01",
            title: "Room D",
            description: "A modern and elegant interior design project.",
            images: [
                "/project_01/1.jpg",
                "/project_01/2.jpg",
                "/project_01/3.jpg",
                "/project_01/4.jpg",
                "/project_01/5.jpg",
                "/project_01/6.jpg",
            ],
        },
        {
            id: "project_02",
            title: "C Residence",
            description: "A sophistic Residenceand functional livin Residencece.",
            images: [
                "/project_02/1.jpg",
                "/project_02/2.jpg",
                "/project_02/3.jpg",
                "/project_02/5.jpg",
                "/project_02/6.jpg",
                "/project_02/7.jpg",
                "/project_02/8.jpg",
                "/project_02/9.jpg",
                "/project_02/10.jpg",
                "/project_02/11.jpg",
            ],
        },
        {
            id: "project_03",
            title: "K Residence",
            description: "A creative and inspiring workspace design.",
            images: [
                "/project_03/1.jpg",
                "/project_03/2.jpg",
                "/project_03/3.jpg",
                "/project_03/4.jpg",
                "/project_03/5.jpg",
                "/project_03/6.jpg",
                "/project_03/7.jpg",
                "/project_03/8.jpg",
                "/project_03/9.jpg",
            ],
        },
    ];

    return (
        <section className="py-20 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light tracking-widest text-center mb-12">
                    Our Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="relative w-full h-64">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    onClick={() => setSelectedImage(project.images[0])}
                                    className="cursor-pointer"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {project.images.map((image, index) => (
                                        <div key={index} className="relative w-full h-24">
                                            <Image
                                                src={image}
                                                alt={`${project.title} - ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-md cursor-pointer"
                                                onClick={() => setSelectedImage(image)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for viewing images */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-3/4">
                            <Image
                                src={selectedImage}
                                alt="Selected Project Image"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-md"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}