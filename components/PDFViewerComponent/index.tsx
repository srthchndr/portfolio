import React, {
    use
} from 'react';

import {
    sanityClient
} from '../../sanity';

async function getPdfUrl() {
    const query = `*[_type=='pdf'] {
        'url': pdf.asset->url
      }[0]`;

    const result = await sanityClient.fetch(query);
    return result;
}

export default function PDFViewerComponent() {
    const pdf = use(getPdfUrl());

    return (
        <iframe
            className={'w-full h-full md:w-[600px] md:h-[550px]'}
            src={`${pdf.url}#toolbar=0&view=fitH`}
            title={'Resume'}
        />
    );
}
