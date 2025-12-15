import {Project} from "@/app/utils/types";
import CustomButton from "@/app/components/CustomButton";


interface ProjectCardProps {
    project: Project;
    index: boolean
}

const ProjectCard= ({ project, index }: ProjectCardProps) => {


    return (
        <div
            className={`relative w-full rounded-4xl overflow-hidden bg-cover bg-center bg-no-repeat ${index ? 'col-span-2' : 'col-span-1'}`}
            style={{ backgroundImage: `url(${project.projectCardImage.url})` }}
        >

            {project.projectCardButtonText && project.projectCardButtonUrl && (
                <CustomButton customClass="border-white hover:text-gray-800 m-[2vw] hover:border-gray-800 uppercase bg-white text-xl text-black"
                              text={project.projectCardButtonText} link={project.projectCardButtonUrl} />
            )}


            <div className="absolute bottom-[2vw] left-[2vw] text-white text-[1.5vw] line-clamp-0 drop-shadow-md max-w-1/2">
                {project.projectCardTitle}
            </div>
        </div>
    );
};

export default ProjectCard;
