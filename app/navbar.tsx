import Link from 'next/link';

export default function NavbarComponent() {
    return (
        <nav className={'flex items-center space-x-2 sticky top-0 bg-black-default z-10'}>
            <div className={'flex-1 space-x-12'}>
                <Link
                    className={'transition ease-in-out font-bold font-mono text-xl text-neongreen-default hover:text-neongreen-primary active:text-neongreen-secondary duration-300'}
                    href={'/'}
                >
                    Sarath Madala
                </Link>
            </div>
            <div className={'hidden md:flex flex-1 items-center space-x-9 justify-end'}>
                <Link
                    className={'transition ease-in-out text-neongreen-default  hover:text-neongreen-primary active:text-neongreen-secondary duration-300'}
                    href={'#about'}
                >About
                </Link>
                <Link
                    className={'transition ease-in-out text-neongreen-default  hover:text-neongreen-primary active:text-neongreen-secondary duration-300'}
                    href={'#projects'}
                >Projects
                </Link>
                <Link
                    className={'transition ease-in-out text-neongreen-light dark:text-neongreen-primary  hover:bg-neongreen-primary active:bg-neongreen-secondary hover:text-neongreen-dark duration-300 border-neongreen-primary border-2 px-8 py-2 rounded-lg'}
                    href={'#resume'}
                >Resume
                </Link>
            </div>
        </nav>
    );
}
