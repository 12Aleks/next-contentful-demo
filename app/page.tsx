import {homepageAction} from "@/app/actions/homepageAction";
import {Homepage} from "@/app/utils/types";
import "./globals.css";
import BannerWithMask from "@/app/featchers/home/components/BannerWithMask";
import Navbar from "@/app/components/Navbar";
import CityTransformation from "@/app/featchers/home/components/CityTransformation";


export async function generateMetadata() {
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
        cityTransformation
    } = homepageEntry.fields as Homepage;

    const videoUrl = bannerVideoUrl?.fields?.file?.url as string | undefined;

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

              <CityTransformation cityTransformation={cityTransformation}/>

            </main>
        </>
    );
}