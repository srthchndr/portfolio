import {
    ButtonType
} from './enums';

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
    links?: {github?: LinkAndLogo, live?: LinkAndLogo}
}

export interface ButtonProps {
    type: ButtonType,
    children: import('react').ReactNode,
    className?: string,
    href?: string
}

