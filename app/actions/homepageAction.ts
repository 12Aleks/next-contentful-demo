import { Entry } from 'contentful';
import {Homepage, HomepageSkeleton} from "@/app/utils/types";
import { client } from "@/app/lib/contentfulInitial";

export const homepageAction = async (): Promise<Entry<HomepageSkeleton> | null>  => {
    const response = await client.getEntries<HomepageSkeleton>({
        content_type: "homepage",
        limit: 1,
    });

    if (response.items.length > 0) {
        return response.items[0];
    }

    return null;
}

