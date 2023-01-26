import Image from 'next/image';
import React from 'react';

import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Logo from '../assets/logo.png';
import Mail from '../assets/mail.svg';
import {
    ButtonType
} from '../types';

import ButtonComponent from '../components/ButtonComponent';

export default function FooterComponent() {
    return (
        <footer className={'block space-y-2 md:flex md:flex-1 border-t dark:border-black-secondary border-black-secondary p-5'}>
            <div
                className={'flex-1 flex items-center justify-center mb-8 md:my-0'}
                id={'contact'}
            >
                <Mail className={'mx-4 scale-125 stroke-neongreen-default justify-end'} />
                <span className={'text-sm'}>sarathmadala@outlook.com</span>
            </div>
            <div className={'md:text-center flex-1 flex justify-center'}>
                <Image
                    alt={'Sarath Madala'}
                    className={'w-[50px] h-[50px]'}
                    height={50}
                    src={Logo}
                    width={50}
                />
            </div>
            <div className={'flex-1 flex justify-center space-x-4 items-center'}>
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
            </div>
        </footer>
    );
}
