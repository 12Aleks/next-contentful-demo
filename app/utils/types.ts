import {Asset, Entry, EntrySkeletonType} from "contentful";

export interface Project {
    projectCardTitle: string;
    projectCardImage: {
        url: string;
        title: string;
    };
    projectCardButtonText?: string;
    projectCardButtonUrl?: string;
}

export interface HomepageSkeleton extends EntrySkeletonType {
    contentTypeId: "homepage";
    fields: {
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
    };
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
    projectsIntro?:string
    projects?: Project[];
}