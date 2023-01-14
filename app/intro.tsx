import Image from 'next/image';

import Project from '../assets/Project_stock.jpg';
import {
    ButtonType
} from '../types/enums';

import ButtonComponent from '../components/ButtonComponent';

export default function IntroComponent() {
    return (
        <div className={'flex flex-col-reverse md:flex-row h-screen items-center p-5'}>
            <div className={'w-full md:w-8/12 p-2'}>
                <h1 className={'text-5xl dark:text-grey-primary text-black-default'}>Hi &#x1F590;, I am Sarath Madala</h1>
                <p className={'dark:text-grey-darker text-black-secondary'}>Hi there! I am a fullstack web developer with experience in frontend and backend technologies such as <span className={'text-neongreen-default'}>React, Next JS, Node Js, Express</span>. I am interested in freelancing and am available for new projects. As a fullstack developer, I have a strong understanding of web development best practices and am skilled in delivering successful solutions from start to finish. Thank you for considering me for your project.</p>
                <div className={'hidden md:mt-8 md:px-8 md:text-end'}>
                    <ButtonComponent
                        className={'text-end'}
                        type={ButtonType.PRIMARY}
                    >Contact me
                    </ButtonComponent>
                </div>
            </div>
            <div className={'text-center md:flex-1 md:center md:w-4/12'}>
                <Image
                    alt={"It's me"}
                    height={1000}
                    src={Project}
                />
            </div>
        </div>
    );
}
