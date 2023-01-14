'use client';

import Link from 'next/link';
import {
    useRef
} from 'react';

import {
    ButtonType
} from '../../types/enums';
import ButtonComponent from '../ButtonComponent';

export default function NavbarComponent() {
    let lastScrollTop = 0;
    const navRef = useRef < HTMLElement >(null);
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (navRef.current) {
            if (scrollTop > lastScrollTop) {
                navRef.current.style.top = '-80px';
            } else {
                navRef.current.style.top = '0';
            }
        }
        lastScrollTop = scrollTop;
    });
    return (
        <nav
            className={'flex duration-500 items-center space-x-2 sticky top-0 bg-white-default dark:bg-black-default z-10 p-5'}
            ref={navRef}
        >
            <div className={'flex-1 space-x-12'}>
                <Link
                    className={'transition ease-in-out font-bold font-mono text-xl text-neongreen-default hover:text-neongreen-primary active:text-neongreen-secondary duration-300'}
                    href={'/'}
                >
                    Sarath Madala
                </Link>
            </div>
            <div className={'hidden md:flex flex-1 items-center space-x-9 justify-end'}>
                <ButtonComponent
                    href={'#about'}
                    type={ButtonType.LINK}
                >About
                </ButtonComponent>
                <ButtonComponent
                    href={'#projects'}
                    type={ButtonType.LINK}
                >Projects
                </ButtonComponent>
                <ButtonComponent
                    href={'#resume'}
                    type={ButtonType.SECONDARY}
                >Resume
                </ButtonComponent>
            </div>
        </nav>
    );
}
