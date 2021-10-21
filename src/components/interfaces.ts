import { formTouchedT } from './Logic';

export interface ICard {
    number: string;
    name: string;
    expires: string;
    cvv: string;
    cardSide: formTouchedT;
}

export type inputT = string | null;
