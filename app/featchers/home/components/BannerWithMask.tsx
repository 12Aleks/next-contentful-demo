"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface IBannerWithMask {
    videoUrl: string | null;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerButtonText: string;
    bannerButtonUrl: string;
}

export default function BannerWithMask({
                                           videoUrl,
                                           bannerTitle,
                                           bannerSubtitle,
                                           bannerButtonText,
                                           bannerButtonUrl,
                                       }: IBannerWithMask) {
    const maskRef = useRef<SVGGElement | null>(null);
    const [videoScale, setVideoScale] = useState(1.4);
    const [videoOffset, setVideoOffset] = useState(20);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight * 2; // 200vh когда маска полностью открывается
            const progress = Math.min(scrollY / maxScroll, 1);


            // Масштаб маски и смещение
            const scale = 1.4 + progress * 2.5; // от 1.4 до ~3.9
            const offset = 20 - progress * 20; // смещаем вверх до 0

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
        <section className="bg-emerald-900">
            {/* Орнамент */}
            <Image
                src="/arabic_desing.png"
                alt="arabic_design"
                fill
                className="absolute z-0 object-cover"
            />

            {/* Контейнер 300vh для скролла */}
            <div className="relative w-screen h-[300vh]">
                {/* Sticky контейнер */}
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    <svg
                        className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMax meet"
                    >
                        <defs>
                            <mask id="archMask">
                                <rect width="100" height="100" fill="black" />
                                <g
                                    ref={maskRef}
                                    transform={`translate(50 ${videoOffset}) scale(${videoScale} ${videoScale}) translate(-50 0)`}
                                >
                                    <path
                                        d="M25 100 L25 20 A25 25 0 0 1 75 20 L75 100 Z"
                                        fill="white"
                                    />
                                </g>
                            </mask>
                        </defs>

                        {videoUrl && (
                            <foreignObject
                                x="0"
                                y="0"
                                width="100"
                                height="100"
                                mask="url(#archMask)"
                            >
                                <video
                                    src={videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </foreignObject>
                        )}
                    </svg>

                    {/* Контент поверх видео */}
                    <div className="relative z-10 flex flex-col items-start justify-center w-full h-full text-white p-16 uppercase">
                        <h1 className="text-[3vw] mb-2 ">{bannerTitle}</h1>
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

                        <div className="w-[100px] h-[100px] border border-emerald-700 rounded-full flex flex-col items-center justify-center">
                            <span className="text-[4vh] text-emerald-700">&#8595;</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
