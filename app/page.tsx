import {homepageAction} from "@/app/actions/homepageAction";
import {Homepage} from "@/app/utils/types";
import "./globals.css";
import BannerWithMask from "@/app/featchers/home/components/BannerWithMask";
import Navbar from "@/app/components/Navbar";
import CityTransformation from "@/app/featchers/home/components/CityTransformation";
import {Metadata} from "next";


export async function generateMetadata(): Promise<Metadata> {
    const homepageEntry = await homepageAction();

    if (!homepageEntry) {
        return {
            title: "Homepage",
            description: "Homepage",
        };
    }

    const {pageTitle, bannerSubtitle} = homepageEntry.fields as Homepage;

    return {
        title: pageTitle,
        description: `${pageTitle} - ${bannerSubtitle}`,
    };
}

export default async function Home() {
    const homepageEntry = await homepageAction();

    if (!homepageEntry) {
        return <div>No homepage data found.</div>;
    }

    const {
        bannerTitle,
        bannerSubtitle,
        bannerButtonText,
        bannerButtonUrl,
        bannerVideoUrl,
        municipalIdea,
        secondBlock,
        cityTransformation,
        projects,
        projectsIntro
    } = homepageEntry.fields as Homepage;

    const videoUrl = bannerVideoUrl?.fields?.file?.url as string | undefined;

    const formattedProjects = projects?.map((p: any) => ({
        projectCardTitle: p.fields.projectCardTitle,
        projectCardImage: {
            url: p.fields.projectCardImage.fields.file.url,
            title: p.fields.projectCardImage.fields.title,
        },
        projectCardButtonText: p.fields.projectCardButtonText,
        projectCardButtonUrl: p.fields.projectCardButtonUrl,
    }));

    return (
        <>
            <Navbar/>
            <main className="flex min-h-screen w-full flex-col items-center">

                <BannerWithMask videoUrl={videoUrl}
                                bannerTitle={bannerTitle}
                                bannerSubtitle={bannerSubtitle}
                                bannerButtonText={bannerButtonText}
                                bannerButtonUrl={bannerButtonUrl}
                                municipalIdea={municipalIdea} secondBlock={secondBlock}
                />

              <CityTransformation cityTransformation={cityTransformation}
                                  projectsIntro={projectsIntro}
              projects={formattedProjects}/>

            </main>
        </>
    );
}