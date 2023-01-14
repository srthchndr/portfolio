import Image from 'next/image';

import ProjectImage from '../../assets/Project_stock.jpg';
import GithubIcon from '../../assets/github.svg';
import {
    ProjectProps
} from '../../types';

export default function ProjectComponent({
    imageURL, links, skills, summary, title
}: ProjectProps) {
    return (
        <div className={'md:flex rounded-lg m-2 space-x-2 group hover:bg-neongreen-light dark:hover:bg-neongreen-dark'}>
            <div className={'flex justify-center p-2 md:p-0'}>
                {(
                    <Image
                        alt={'Project'}
                        className={'m-2 rounded-lg aspect-[4/4] text-black-default'}
                        height={200}
                        sizes={'(max-width: 200px) 200px'}
                        src={imageURL || ProjectImage}
                        width={200}
                    />
                )}
            </div>
            <div className={'p-2 w-full space-y-4'}>
                <h5 className={'dark:text-grey-primary cursor-pointer hover:underline'}>{title}</h5>
                <p className={'text-xs text-black-secondary dark:text-grey-secondary'}>{summary}</p>
                <div className={'space-x-2 space-y-2'}>
                    {skills.map((skill) => (
                        <span
                            className={'inline-flex bg-neongreen-primary text-white-default dark:text-black-default rounded-xl py-1 px-3 text-xs whitespace-nowrap'}
                            key={skill}
                        >{skill}
                        </span>
                    ))}
                </div>
                <div className={'space-x-4 text-sm flex justify-around items-center'}>
                    {links && links.github && links.github.link && (
                        <a
                            className={'flex px-4 md:ml-auto items-center group/link'}
                            href={links.github.link}
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            <GithubIcon
                                className={'dark:fill-white-default scale-75'}
                            />
                            <span className={'group-hover/link:underline text-xs'}>Github</span>
                        </a>
                    )}
                    {links && links.live && links.live.link && (
                        <a
                            className={'flex px-4 space-x-2 items-center group/link'}
                            href={links.live.link}
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            {links.live.logo && (
                                <Image
                                    alt={title}
                                    src={links.live.logo}
                                />
                            )}
                            <span className={'group-hover/link:underline text-xs'}>Live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

ProjectComponent.defaultProps = {
    imageURL: null,
    links: null
};
