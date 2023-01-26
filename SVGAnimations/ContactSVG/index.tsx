import './styles.css';

import {
    ClassNameProps
} from '../../types';

export default function ContactSVG({
    className = ''
}: ClassNameProps) {
    return (
        <svg
            className={`${className}`}
            fill={'none'}
            height={'20'}
            viewBox={'0 0 18 20'}
            width={'18'}
            xmlns={'http://www.w3.org/2000/svg'}
        >
            <g id={'Group 1'}>
                <g id={'mail'}>
                    <mask
                        fill={'white'}
                        id={'path-1-inside-1_51_303'}
                    >
                        <path
                            clipRule={'evenodd'}
                            d={'M2.81925 0C2.36679 0 2 0.366788 2 0.819246C2 1.10702 2.15099 1.37369 2.39775 1.52174L9.21006 5.60913C9.69939 5.90273 10.3129 5.89324 10.7929 5.58466L17 1.5944V10.5C17 10.7761 16.7761 11 16.5 11H7V12H16.5C17.3284 12 18 11.3284 18 10.5V1.5C18 0.671572 17.3284 0 16.5 0H2.81925ZM2 6H3V2.5C3 2.22386 2.77614 2 2.5 2C2.22386 2 2 2.22386 2 2.5V6ZM16.0754 1H3.47183L9.72455 4.75164C9.88766 4.8495 10.0922 4.84634 10.2522 4.74348L16.0754 1Z'}
                            fillRule={'evenodd'}
                        />
                    </mask>
                    <path
                        d={'M2.39775 1.52174L1.88325 2.37924L1.88325 2.37924L2.39775 1.52174ZM9.21006 5.60913L8.69556 6.46662L8.69556 6.46662L9.21006 5.60913ZM10.7929 5.58466L10.2522 4.74348L10.7929 5.58466ZM17 1.5944H18V-0.237261L16.4592 0.753226L17 1.5944ZM7 11V10H6V11H7ZM7 12H6V13H7V12ZM2 6H1V7H2V6ZM3 6V7H4V6H3ZM3.47183 1V0H-0.138492L2.95733 1.85749L3.47183 1ZM16.0754 1L16.6161 1.84118L19.4802 0L16.0754 0V1ZM9.72455 4.75164L10.2391 3.89414L10.239 3.89414L9.72455 4.75164ZM10.2522 4.74348L9.71142 3.9023L9.71142 3.9023L10.2522 4.74348ZM3 0.819246C3 0.919075 2.91907 1 2.81925 1V-1C1.81451 -1 1 -0.185498 1 0.819246H3ZM2.91224 0.664251C2.96669 0.696917 3 0.755754 3 0.819246H1C1 1.45828 1.33529 2.05046 1.88325 2.37924L2.91224 0.664251ZM9.72455 4.75164L2.91224 0.664251L1.88325 2.37924L8.69556 6.46662L9.72455 4.75164ZM10.2522 4.74348C10.0922 4.84634 9.88766 4.8495 9.72455 4.75164L8.69556 6.46662C9.51111 6.95595 10.5337 6.94014 11.3337 6.42584L10.2522 4.74348ZM16.4592 0.753226L10.2522 4.74348L11.3337 6.42584L17.5408 2.43558L16.4592 0.753226ZM18 10.5V1.5944H16V10.5H18ZM16.5 12C17.3284 12 18 11.3284 18 10.5H16C16 10.2239 16.2239 10 16.5 10V12ZM7 12H16.5V10H7V12ZM6 11V12H8V11H6ZM16.5 11H7V13H16.5V11ZM17 10.5C17 10.7761 16.7761 11 16.5 11V13C17.8807 13 19 11.8807 19 10.5H17ZM17 1.5V10.5H19V1.5H17ZM16.5 1C16.7761 1 17 1.22386 17 1.5H19C19 0.119287 17.8807 -1 16.5 -1V1ZM2.81925 1H16.5V-1H2.81925V1ZM2 7H3V5H2V7ZM2 2.5V6H4V2.5H2ZM2.5 3C2.22386 3 2 2.77614 2 2.5H4C4 1.67157 3.32843 1 2.5 1V3ZM3 2.5C3 2.77614 2.77614 3 2.5 3V1C1.67157 1 1 1.67157 1 2.5H3ZM3 6V2.5H1V6H3ZM3.47183 2H16.0754V0H3.47183V2ZM10.239 3.89414L3.98632 0.142507L2.95733 1.85749L9.21006 5.60913L10.239 3.89414ZM9.71142 3.9023C9.87143 3.79944 10.0759 3.79628 10.2391 3.89414L9.21006 5.60913C9.69939 5.90273 10.3129 5.89324 10.7929 5.58466L9.71142 3.9023ZM15.5346 0.158822L9.71142 3.9023L10.7929 5.58466L16.6161 1.84118L15.5346 0.158822Z'}
                        fill={'black'}
                        id={'mail_outline'}
                        mask={'url(#path-1-inside-1_51_303)'}
                    />
                </g>
                <g id={'phone'}>
                    <path
                        d={'M4.05001 18C4.05001 18.3038 3.80377 18.55 3.50001 18.55C3.19624 18.55 2.95001 18.3038 2.95001 18C2.95001 17.6962 3.19624 17.45 3.50001 17.45C3.80377 17.45 4.05001 17.6962 4.05001 18Z'}
                        id={'button'}
                        stroke={'black'}
                        strokeWidth={'0.2'}
                    />
                    <line
                        id={'screen'}
                        stroke={'black'}
                        strokeWidth={'0.2'}
                        x1={'1'}
                        x2={'6'}
                        y1={'16.9'}
                        y2={'16.9'}
                    />
                    <path
                        d={'M0.5 18V8C0.5 7.17157 1.17157 6.5 2 6.5H5C5.82843 6.5 6.5 7.17157 6.5 8V18C6.5 18.8284 5.82843 19.5 5 19.5H2C1.17157 19.5 0.5 18.8284 0.5 18Z'}
                        id={'phone_outer'}
                        stroke={'black'}
                    />
                </g>
            </g>
        </svg>
    );
}
