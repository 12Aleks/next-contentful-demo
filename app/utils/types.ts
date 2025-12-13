import { Asset } from "contentful";

export interface Homepage {
    pageTitle: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerVideoUrl?: Asset;
    bannerButtonText: string;
    bannerButtonUrl: string;
    municipalIdea: string;
    secondBlock: string
}