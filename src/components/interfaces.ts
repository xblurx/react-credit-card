import { TFormTouched } from './Logic';

export interface ICard {
    logo: any;
    number: string;
    name: string;
    expires: string;
    cvv: string;
    cardSide: TFormTouched;
}

export type TInput = string | null;
