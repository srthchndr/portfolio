'use client';

import Link from 'next/link';
import React from 'react';

import {
    ButtonProps
} from '../../types';

export default function ButtonComponent({
    children, className = '', href = null, onButtonClick = () => {}, type
}: ButtonProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        onButtonClick(event);
    };

    return (
        href ? (
            <Link
                className={`data-[type=link]:text-neongreen-default data-[type=link]:hover:text-neongreen-primary data-[type=link]:active:text-neongreen-secondary data-[type=primary]:px-4 data-[type=primary]:py-2 data-[type=primary]:bg-neongreen-default data-[type=primary]:hover:bg-neongreen-secondary data-[type=primary]:text-white-default data-[type=primary]:dark:text-black-default data-[type=primary]:rounded-lg data-[type=secondary]:hover:bg-neongreen-secondary data-[type=secondary]:active:bg-neongreen-secondary data-[type=secondary]:hover:text-white-default data-[type=secondary]:dark:hover:text-black-default data-[type=secondary]:duration-300 data-[type=secondary]:border-neongreen-primary data-[type=secondary]:border-2 data-[type=secondary]:px-8 py-2 data-[type=secondary]:rounded-lg data-[type=secondary]:text-neongreen-primary ${className}`}
                data-type={type}
                href={href}
                onClick={(event) => { event.preventDefault(); handleClick(event); }}
            >{children}
            </Link>
        ) : (
            <button
                className={`data-[type=link]:text-neongreen-default data-[type=link]:hover:text-neongreen-primary data-[type=link]:active:text-neongreen-secondary data-[type=primary]:px-4 data-[type=primary]:py-2 data-[type=primary]:bg-neongreen-default data-[type=primary]:hover:bg-neongreen-secondary data-[type=primary]:text-white-default data-[type=primary]:dark:text-black-default data-[type=primary]:rounded-lg data-[type=secondary]:hover:bg-neongreen-secondary data-[type=secondary]:active:bg-neongreen-secondary data-[type=secondary]:hover:text-white-default data-[type=secondary]:dark:hover:text-black-default data-[type=secondary]:duration-300 data-[type=secondary]:border-neongreen-primary data-[type=secondary]:border-2 data-[type=secondary]:px-8 py-2 data-[type=secondary]:rounded-lg data-[type=secondary]:text-neongreen-primary ${className}`}
                data-type={type}
                onClick={handleClick}
                type={'button'}
            >{children}
            </button>
        )
    );
}

