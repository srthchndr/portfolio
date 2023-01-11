import {
    ReactNode
} from 'react';

type ChildrenProp = {children: ReactNode}

export default function CardWrapperComponent({
    children
}: ChildrenProp) {
    return (
        <div className={'flex flex-wrap'}>
            {children}
        </div>
    );
}
