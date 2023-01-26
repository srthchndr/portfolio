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
        <embed
            className={'w-full h-full md:w-[600px] md:h-[550px]'}
            src={'https://drive.google.com/file/d/1gUYd0pvSpCsrrPpsp6CC6ZsKQm-18jSh/view?usp=sharing#toolbar=0&view=fitH'}
            type={'application/pdf'}
        />
    );
}
