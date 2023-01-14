import Image from 'next/image';

import Github from '../../assets/github.svg';
import Mastercard from '../../assets/mastercard.png';
import Toyota from '../../assets/toyota.png';

export default function CarouselComponent() {
    return (
        <div className={'w-full flex bg-grey-primary h-36 my-14 py-5 overflow-hidden'}>
            <ul className={'flex flex-wrap  items-center flex-grow'}>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>React</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>NextJS</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Angular</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>NodeJS</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>ExpressJS</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Github</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Gitlabs</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Sass</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>HTML</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Javascript</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Typescript</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>PostgreSQL</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>GraphQL</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Git</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>CSS</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Redux</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>NPM</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Webpack</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Babel</span></li>
                <li className={'rounded-lg bg-neongreen-dark text-white-default m-2 flex space-x-4'}><span className={'rounded-l-lg w-8 p-1 bg-neongreen-dark items-center'}><Github className={'fill-black-default scale-75'} /></span><span className={'px-2 text-grey-default'}>Grunt</span></li>
            </ul>
        </div>
    );
}
