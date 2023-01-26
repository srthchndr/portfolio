import React from 'react';

import Sarath from '../assets/sarath-1.svg';

export default function IntroComponent() {
    return (
        <div className={'flex flex-col-reverse md:flex-row md:h-screen justify-start h-full md:items-center p-5 md:mt-0'}>
            <div className={'w-full md:w-8/12 p-2'}>
                <h1 className={'text-5xl dark:text-grey-primary text-black-default'}>Hi &#x1F590;, I am Sarath Madala</h1>
                <p className={'dark:text-grey-darker text-black-secondary mt-4'}>Hi there! I am a fullstack web developer with experience in frontend and backend technologies such as <span className={'text-neongreen-default'}>React, Next JS, Node Js, Express</span>. I am interested in freelancing and am available for new projects. As a fullstack developer, I have a strong understanding of web development best practices and am skilled in delivering successful solutions from start to finish.</p>
                {/* <div className={'hidden md:flex md:mt-4'}>
                    <ButtonComponent
                        className={'flex items-center'}
                        href={'#contact'}
                        onButtonClick={() => {}}
                        type={ButtonType.PRIMARY}
                    >
                        <ContactSVG className={'mx-2 scale-125'} />
                        <span>
                            Contact me
                        </span>
                    </ButtonComponent>
                </div> */}
            </div>
            <div className={'flex justify-center text-center md:flex-1 md:center md:w-4/12'}>
                <Sarath className={'min-h-fit mt-2 block'} />
            </div>
        </div>
    );
}
