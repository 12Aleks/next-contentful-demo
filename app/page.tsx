import { homepageAction } from "@/app/actions/homepageAction";
import { Homepage } from "@/app/utils/types";
import Link from "next/link";
import "./globals.css"; // важно — чтобы подключилась mask-arc


export async function generateMetadata() {
    const homepageEntry = await homepageAction();

    if (!homepageEntry) {
        return {
            title: "Homepage",
            description: "Homepage",
        };
    }

    const { bannerTitle, bannerSubtitle } = homepageEntry.fields as Homepage;

    return {
        title: bannerTitle,
        description: `${bannerTitle} - ${bannerSubtitle}`,
    };
}

export default async function Home() {
    const homepageEntry = await homepageAction();

    if (!homepageEntry) {
        return <div>No homepage data found.</div>;
    }

    const {bannerTitle, bannerSubtitle, bannerButtonText, bannerButtonUrl, bannerVideoUrl} = homepageEntry.fields as Homepage;

    const videoUrl = bannerVideoUrl?.fields?.file?.url as string | undefined;

    return (
        <main className="flex min-h-screen w-full flex-col items-center bg-emerald-900">
            <section className="relative w-screen h-screen overflow-hidden">


                <svg width="100%" height="100%" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-auto">
                    <defs>
                        <mask id="archMask" x="0" y="0" width="100%" height="100%">

                            <rect width="100%" height="100%" fill="black" />


                            <path  d="M25 100 L25 20 A25 25 0 0 1 75 20 L75 100 Z
 "
                                fill="white"
                                   transform="scale(6.5)"
                            />
                        </mask>
                    </defs>
                </svg>


                {videoUrl && (
                    <video src={videoUrl} autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ mask: "url(#archMask)", WebkitMask: "url(#archMask)" }}
                    />
                )}

                {/* === CONTENT === */}
                <div className="relative z-10 flex flex-col items-start justify-center w-full h-full text-white p-16 uppercase">
                    <h1 className="text-5xl mb-2">{bannerTitle}</h1>
                    <h2 className="text-[9vw] leading-none">{bannerSubtitle}</h2>

                    <Link
                        href={bannerButtonUrl}
                        className="mt-6 px-6 py-3 bg-white text-emerald-900 rounded-4xl text-4xl mb-10"
                    >
                        {bannerButtonText}
                    </Link>

                    <div className="w-[100px] h-[100px] border border-emerald-700 rounded-full flex flex-col items-center justify-center">
                        <span className="text-[4vh] text-emerald-700">&#8595;</span>
                    </div>
                </div>

            </section>
        </main>
    );
}
