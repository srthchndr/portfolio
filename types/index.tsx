import React from 'react';

export enum ButtonType {
    LINK = 'link',
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface LinkAndLogo {
    link: string,
    logo?: string
}

export interface ProjectProps {
    id: string,
    image?: Object
    imageURL?: string | null,
    name: string,
    title: string,
    summary: string,
    skills: string []
    links?: {github?: LinkAndLogo, live?: LinkAndLogo} | null
}

export interface ButtonProps {
    type: ButtonType,
    children: import('react').ReactNode,
    className?: string,
    href?: string | null
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> | (() => {});
}

export interface ClassNameProps {
    className?: string
}

