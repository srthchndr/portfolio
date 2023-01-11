import Image from 'next/image';
import Link from 'next/link';
import {
    ReactNode
} from 'react';

import ProjectImage from '../../assets/Project_stock.jpg';
import GithubIcon from '../../assets/github.svg';

type ProjectProps = {children: ReactNode, imageURL: string, title: string, summary: string, skills: string []}

export default function ProjectComponent({
    children, imageURL, skills, summary, title
}: ProjectProps) {
    return (
        <div className={'md:flex rounded-lg m-2 space-x-2 group hover:bg-neongreen-dark'}>
            <div className={'flex justify-center '}>
                <Image
                    alt={'Project'}
                    className={'md:rounded-l-lg rounded-lg max-w-sm md:w-36 md:h-36'}
                    src={imageURL || ProjectImage}
                />
            </div>
            <div className={'p-2 w-full space-y-4'}>
                <h5 className={''}>{title}</h5>
                <p className={'text-xs text-white-secondary'}>{summary}</p>
                <div className={'space-x-2 space-y-2'}>
                    {skills.map((skill) => (
                        <span
                            className={'inline-flex bg-neongreen-primary text-black-default rounded-xl py-1 px-3 text-xs whitespace-nowrap'}
                            key={skill}
                        >{skill}
                        </span>
                    ))}
                </div>
                <div className={'space-y-4 space-x-4 text-sm flex md:justify-between relative bottom-2 right-2'}>
                    <a
                        className={'flex px-4 space-x-2 mx-auto md:ml-auto items-center group/link'}
                        href={'https://github.com/'}
                        rel={'noreferrer'}
                        target={'_blank'}
                    >
                        <GithubIcon
                            className={'dark:fill-white-default'}
                        /><span className={'group-hover/link:underline'}>Github</span>
                    </a>
                    {null && (
                        <div className={'flex space-x-2 items-center'}>
                            <Link href={'google.com'}>Live</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
        // <div className={'space-y-2 h-80 w-72 p-2 min-h-fit rounded-lg border bg-neongreen-dark shadow-grey-darker m-2 border-grey-secondary text-center'}>
        //     <h3 className={'text-start text-lg'}>{title}</h3>
        //     <p className={'text-start text-xs text-grey-darker my-auto'}>{summary}</p>
        //     <div className={'border-t border-t-grey-primary my-2 mt-auto'} />
        //     <div className={'space-x-1 space-y-1'}>{skills.map((skill) => (
        //         <span
        //             className={'inline-flex bg-neongreen-secondary text-white-default rounded-xl py-1 px-3 text-xs whitespace-nowrap'}
        //             key={skill}
        //         >{skill}
        //         </span>
        //     ))}
        //     </div>
        //     <div className={'border-t border-t-grey-primary my-2'} />
        //     <div className={'my-2 text-xs font-bold hover:underline cursor-pointer'}>{githubURL}</div>
        // </div>
    );
}
