import { formTouchedT } from './Logic';

export interface CardPropType {
    cardType: string | false;
    number: string;
    name: string;
    expires: string;
    cvv: string;
    cardSide: formTouchedT;
}


export type inputT = string | null;
