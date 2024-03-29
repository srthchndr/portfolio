import '../styles/globals.css';
import {
    Quicksand
} from '@next/font/google';
import React from 'react';

import NavbarComponent from '../components/NavbarComponent';
import PDFViewerComponent from '../components/PDFViewerComponent';

// If loading a variable font, you don't need to specify the font weight
const inter = Quicksand();

export default function RootLayout({
    children
}: {
  children: React.ReactNode
}) {
    return (
        <html
            className={inter.className}
            lang={'en'}
        >
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className={'scroll-smooth bg-white-default dark:bg-black-default text-black-default dark:text-white-default h-full'}>
                <NavbarComponent dialogNode={<PDFViewerComponent />} />
                {children}
            </body>
        </html>
    );
}
