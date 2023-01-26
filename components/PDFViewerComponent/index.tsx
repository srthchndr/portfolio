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
        <object
            className={'w-full h-full md:w-[800px] md:h-[550px]'}
            data={`${pdf.url}#toolbar=0&view=fitH`}
            height={'100%'}
            type={'application/pdf'}
            width={'100%'}
        />
    );
}
