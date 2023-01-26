'use client';

import React, {
    useEffect,
    useRef
} from 'react';

import {
    ButtonType
} from '../../types';
import ButtonComponent from '../ButtonComponent';

interface DialogProps {
    children?: React.ReactNode | null,
    open: boolean,
    title: string,
    setIsOpen: Function
}

export default function DialogComponent({
    children = null, open = false, setIsOpen, title
}: DialogProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickAwayListener = (e: MouseEvent) => {
            if (e.target === dialogRef.current) {
                setIsOpen(false);
            }
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('click', clickAwayListener);
        }
        return () => {
            window.addEventListener('click', clickAwayListener);
        };
    }, [
        setIsOpen,
        open
    ]);

    return (
        <div
            className={'flex data-[open=false]:hidden overflow-auto w-full h-screen fixed top-0 left-0 bg-white-default/[.80] dark:bg-black-default/[.80] z-10 duration-300'}
            data-open={open}
            ref={dialogRef}
        >
            <div className={'w-full h-screen md:min-h-full md:w-fit min-h-fit m-auto p-4'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'w-full'}>
                        <h1 className={'text-lg w-fit m-auto block'}>{title}</h1>
                    </div>
                </div>
                {children}
                <div className={'w-full'}>
                    <ButtonComponent
                        className={'m-auto block mt-4'}
                        onButtonClick={() => { setIsOpen(false); }}
                        type={ButtonType.PRIMARY}
                    >
                        Close
                    </ButtonComponent>
                </div>
            </div>
        </div>
    );
}
