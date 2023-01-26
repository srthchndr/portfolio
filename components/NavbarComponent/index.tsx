'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, {
    useRef, useState
} from 'react';

import Github from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Logo from '../../assets/logo.png';
import Resume from '../../assets/resume.svg';
import {
    ButtonType
} from '../../types';
import ButtonComponent from '../ButtonComponent';
import DialogComponent from '../DialogComponent';

interface NavbarProps {
    dialogNode: React.ReactNode
}

export default function NavbarComponent({
    dialogNode = null
}: NavbarProps) {
    let lastScrollTop = 0;
    const navRef = useRef < HTMLElement >(null);

    const [
        isDialogOpen,
        setIsDialogOpen
    ] = useState(false);

    // const [
    //     isDrawerOpen,
    //     setIsDrawerOpen
    // ] = useState(false);

    if (typeof window !== 'undefined') {
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
    }
    return (
        <>
            <nav
                className={'flex duration-500 items-center space-x-2 sticky top-0 bg-white-default dark:bg-black-default z-10 p-5'}
                ref={navRef}
            >
                <div className={'space-x-12'}>
                    <Link
                        className={'group flex items-center transition ease-in-out font-bold font-mono text-xl text-neongreen-default hover:text-neongreen-primary active:text-neongreen-secondary duration-300'}
                        href={'/'}
                    >
                        <Image
                            alt={'Sarath Madala'}
                            className={'mx-2 group-hover:rotate-[360deg] duration-700 ease-out group-hover:ease-in-out'}
                            height={50}
                            src={Logo}
                            width={50}
                        />
                        Sarath Madala
                    </Link>
                </div>
                <div className={'flex-1 md:hidden items-center text-end duration-300'}>
                    <ButtonComponent
                        className={'justify-end'}
                        onButtonClick={() => setIsDialogOpen(true)}
                        type={ButtonType.LINK}
                    >
                        <Resume className={'mr-2 duration-300 group-hover:stroke-white-default group-hover:dark:stroke-black-default scale-125 stroke-neongreen-default'} />
                        {/* <Menu className={'stroke-neongreen-default scale-150 '} /> */}
                    </ButtonComponent>
                </div>
                <div className={'hidden md:flex flex-1 items-center space-x-4 justify-end'}>
                    <ButtonComponent
                        href={'https://linkedin.com/in/sarath-chandra-madala'}
                        type={ButtonType.LINK}
                    >
                        <LinkedIn className={'fill-grey-default hover:fill-neongreen-default scale-50'} />
                    </ButtonComponent>
                    <ButtonComponent
                        href={'https://github.com/srthchndr'}
                        type={ButtonType.LINK}
                    ><Github className={'fill-grey-default hover:fill-neongreen-default'} />
                    </ButtonComponent>
                    <ButtonComponent
                        className={'flex items-center group'}
                        onButtonClick={() => setIsDialogOpen(true)}
                        type={ButtonType.SECONDARY}
                    >
                        <Resume className={'mr-2 duration-300 group-hover:stroke-white-default group-hover:dark:stroke-black-default scale-125 stroke-neongreen-default'} />
                        <span>
                            Resume
                        </span>
                    </ButtonComponent>
                    {/* <ButtonComponent
                        className={'flex items-center'}
                        href={'#contact'}
                        onButtonClick={() => {}}
                        type={ButtonType.PRIMARY}
                    >
                        <ContactSVG className={'mx-2 scale-125'} />
                        <span>
                            Contact me
                        </span>
                    </ButtonComponent> */}
                </div>
            </nav>
            {/* <DrawerComponent
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            /> */}
            <DialogComponent
                open={isDialogOpen}
                setIsOpen={setIsDialogOpen}
                title={'Resume'}
            >
                {dialogNode}
            </DialogComponent>
        </>
    );
}
