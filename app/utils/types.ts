import { Asset } from "contentful";

export interface Homepage {
    bannerTitle: string;
    bannerSubtitle: string;
    bannerVideoUrl?: Asset;
    bannerButtonText: string;
    bannerButtonUrl: string;
}