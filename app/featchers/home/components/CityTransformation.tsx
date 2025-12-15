import CustomButton from "@/app/components/CustomButton";
import {Project} from "@/app/utils/types";
import ProjectCard from "@/app/featchers/home/components/ProjectCard";

interface ICityTransformation {
    cityTransformation: string
    projects?: Project[]
}

const CityTransformation = ({ cityTransformation,
                            projects}: ICityTransformation) => {



    return (
        <section className="w-full min-h-screen bg-white flex flex-col items-center py-[20vw] px-10 ">
            <CustomButton customClass="border-gray-600 hover:text-white hover:bg-black hover:border-gray-800 uppercase text-xl text-black"
                          text="This is test button with link"
                          link={'#'}/>
            <h2 className="text-[2vw] text-center max-w-1/2 text-black">{cityTransformation}</h2>
            <div className="border-t border-gray-300 my-[5vw] w-full
            grid grid-cols-3 gap-4
            [&_p]:text-gray-600
              [&_p]:text-2xl
              [&_h3]:inline
              [&_p]:max-w-1/3

            ">
               <div className="px-[2vw] ">
                   <h3 className="text-[5vw] text-center max-w-1/2 text-black ">+ 300</h3>
                   <p>Test content</p>
               </div>
                <div className="border-l border-r border-gray-300 px-[2vw]">
                   <h3 className="text-[5vw] text-center max-w-1/2 text-black">+ 3000</h3>
                   <p>Test content, best content</p>
               </div>
                <div className="px-[2vw]">
                   <h3 className="text-[5vw] text-center max-w-1/2 text-black">+ 200</h3>
                   <p>Test content</p>
               </div>
            </div>
            <div className="grid grid-cols-3 gap-10 w-full auto-rows-[400px] md:auto-rows-[500px] xl:auto-rows-[700px] my-[5vw]">
            {
                projects?.map((project, index) =>
                <ProjectCard project={project} key={index} index={ index === 0 || index === 3}/>)
            }
            </div>
        </section>
    );
};

export default CityTransformation;