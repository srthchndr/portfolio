import imageUrlBuilder from '@sanity/image-url';
import {
    createClient
} from 'next-sanity';

export const config = {
    apiVersion: '2021-10-21',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === 'production'
};

export const sanityClient = createClient(config);
export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);
