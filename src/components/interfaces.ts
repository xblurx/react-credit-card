import { formTouchedT } from './Logic';

export interface CCPropType {
    logo: any;
    number: string;
    name: string;
    expires: string;
    cvv: string;
    cardSide: formTouchedT;
}

export interface LogoPropType {
    logo: any;
}

export type inputT = string | null;
