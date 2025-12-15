import { Asset } from "contentful";

export interface Project {
    projectCardTitle: string;
    projectCardImage: {
        url: string;
        title: string;
    };
    projectCardButtonText?: string;
    projectCardButtonUrl?: string;
}

export interface Homepage {
    pageTitle: string;
    bannerTitle: string;
    bannerSubtitle: string;
    bannerVideoUrl?: Asset;
    bannerButtonText: string;
    bannerButtonUrl: string;
    municipalIdea: string;
    secondBlock: string;
    cityTransformation: string;
    projects?: Project[];
}