"use client";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";

interface IBannerWithMask {
    videoUrl: string | undefined;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerButtonText: string;
    bannerButtonUrl: string;
    municipalIdea: string;
    secondBlock: string
}

export default function BannerWithMask({
                                           videoUrl,
                                           bannerTitle,
                                           bannerSubtitle,
                                           bannerButtonText,
                                           bannerButtonUrl,
                                           municipalIdea, secondBlock
                                       }: IBannerWithMask) {
    const maskRef = useRef<SVGGElement | null>(null);
    const [videoScale, setVideoScale] = useState(0.7);
    const [videoOffset, setVideoOffset] = useState(40);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 2; // 200vh когда маска полностью открывается
            const progress = Math.min(scrollY / maxScroll, 1);


            // Масштаб маски и смещение
            const scale = 0.7 + progress * 2.5; // от 1.4 до ~3.9
            const offset = 40 - progress * 40; // смещаем вверх до 0

            setVideoScale(scale);
            setVideoOffset(offset);

            if (maskRef.current) {
                maskRef.current.setAttribute(
                    "transform",
                    `translate(50 ${offset}) scale(${scale} ${scale}) translate(-50 0)`
                );
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-emerald-900 w-full bg-[url('/arabic_design.png')] bg-no-repeat bg-top-right">

            {/* Контейнер 300vh для скролла */}
            <div className="relative h-[500vh]">
                <div className="absolute z-10 w-full h-full bg-black opacity-35"></div>
                {/* Sticky контейнер + маска */}
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100"
                         preserveAspectRatio="xMidYMid slice"
                    >
                        <defs>
                            <mask id="archMask">
                                <rect width="100" height="100" fill="black"/>
                                <g ref={maskRef}
                                   transform={`translate(50 ${videoOffset}) scale(${videoScale} ${videoScale}) translate(-50 0)`}
                                >
                                    <path d="M25 100 L25 20 A25 25 0 0 1 75 20 L75 100 Z" fill="white"/>
                                </g>
                            </mask>
                        </defs>

                        {videoUrl &&
                            <foreignObject x="0" y="0" width="100" height="100" mask="url(#archMask)">
                                <video src={videoUrl} autoPlay muted loop className="object-cover h-full w-full"/>
                            </foreignObject>
                        }
                    </svg>
                </div>

                {/* Text content */}
                <div
                    className="absolute z-10 flex flex-col items-start w-full max-h-screen top-[18vh] text-white p-16 uppercase gap-y-10">
                    <h1 className="text-[3vw]">{bannerTitle}</h1>
                    <h2 className="text-[10vw] leading-none text-shadow-2xs text-shadow-emerald-900">
                        {bannerSubtitle}
                    </h2>

                    <Link
                        href={bannerButtonUrl}
                        target="_blank"
                        className="mt-[5vh] mb-[5vh] px-10 py-5 bg-white hover:bg-emerald-700 hover:text-white duration-300 text-emerald-900 rounded-4xl text-4xl inline-block"
                    >
                        {bannerButtonText}
                    </Link>

                    <div
                        className="w-[100px] h-[100px] border border-emerald-700 rounded-full flex flex-col items-center justify-center">
                        <span className="text-[4vh] text-emerald-700">&#8595;</span>
                    </div>
                </div>

                {/*First and second text blocks with buttons*/}
                <div
                    className="text-white absolute z-10 w-full bottom-0 left-0 flex flex-col items-center justify-around  h-[400vh]">
                    <div className="flex flex-col items-center">
                        <Link href={municipalIdea}
                              target="_blank"
                              className="mt-[5vh] mb-[5vh] px-10 py-5 bg-transparent hover:text-emerald-100 hover:border-emerald-100 duration-300  rounded-4xl text-4xl inline-block border border-white uppercase"

                        >
                            This is test button with link
                        </Link>
                        <h2 className="text-[2vw] text-center w-[35vw]">{municipalIdea}</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link href={secondBlock}
                              target="_blank"
                              className="mt-[5vh] mb-[5vh] px-10 py-5 bg-transparent hover:text-emerald-100 hover:border-emerald-100 duration-300  rounded-4xl text-4xl inline-block border border-white uppercase"

                        >
                            This is test button with link
                        </Link>
                        <h2 className="text-[2vw] text-center w-[35vw]">{secondBlock}</h2>
                    </div>
                </div>


            </div>
        </section>
    );
}
