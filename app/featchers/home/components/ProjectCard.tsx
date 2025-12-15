"use client";
import { Project } from "@/app/utils/types";
import CustomButton from "@/app/components/CustomButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    project: Project;
    index: boolean;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (!imageRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { scale: 1.3 }, // start zoom
                {
                    scale: 1, //end zoom
                    ease: "none",
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);


    return (
        <div
            ref={cardRef}
            className={`relative w-full rounded-4xl overflow-hidden bg-cover
            bg-center bg-no-repeat  ${index ? "col-span-2" : "col-span-1"}`}>
            <Image
                ref={imageRef as any}
                src={ "https:" + project.projectCardImage.url} alt={project.projectCardImage.title}
                   fill
                   className="object-cover"
            />
            {project.projectCardButtonText && project.projectCardButtonUrl && (
                <CustomButton
                    customClass="absolute border-white hover:text-gray-800 left-[2vw] hover:border-gray-800 uppercase bg-white text-xl text-black"
                    text={project.projectCardButtonText}
                    link={project.projectCardButtonUrl}
                />
            )}

            <div className="absolute bottom-[2vw] left-[2vw] text-white text-[1.5vw] drop-shadow-md max-w-1/2">
                {project.projectCardTitle}
            </div>
        </div>
    );
};

export default ProjectCard;
