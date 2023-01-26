import React from 'react';

interface DrawerProps {
    anchor?: string,
    onClose: Function,
    isOpen: boolean
}

export default function DrawerComponent({
    anchor = 'right', isOpen, onClose
}: DrawerProps) {
    return (
        <>
            <div
                aria-hidden={'true'}
                className={'fixed top-20 right-0 left-0 bottom-0 opacity-0 bg-black-default/[.80] transition-opacity data-[open=false]:opacity-0 data-[open=false]:z-10 data-[open=false]:hidden data-[open=true]:visible data-[open=true]:z-0 data-[open=true]:opacity-100 ease-in'}
                data-open={isOpen}
                onClick={() => onClose()}
            />
            <div
                className={'h-full flex flex-auto top-20 outline-none fixed z-20 overflow-y-auto flex-col bg-white-default dark:bg-black-default w-full shrink-0 ease-in data-[open=false]:hidden data-[open=false]:w-60 data-[open=false]:translate-x-60 data-[open=false]:shrink-0 data-[open=false]:ease-out data-[open=true]:visible data-[open=true]:transform-none data-[anchor=left]:left-0 data-[anchor=left]:right-auto data-[anchor=right]:right-0 data-[anchor=right]:left-auto'}
                data-open={isOpen}
                date-anchor={anchor}
                tabIndex={-1}
            >
                <div className={'min-h-[64px] border-b border-black-default'} />
            </div>
        </>
    );
}
