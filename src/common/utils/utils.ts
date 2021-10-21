import { useEffect, useRef } from 'react';
import creditCardType from 'credit-card-type';
import { ECardIssuer, TCardIssuer } from 'components/Logic';

export const formatNumberString = (value: string): string => {
    const STRING_LENGTH = 16;
    const strippedValue = value.replace(/\s/g, '');
    const hashes = STRING_LENGTH - strippedValue.length;

    if (hashes >= 0) {
        const numberWithHashes = strippedValue + '#'.repeat(hashes);
        return `${numberWithHashes.substr(0, 4)} ${numberWithHashes.substr(
            4,
            4
        )} ${numberWithHashes.substr(8, 4)} ${numberWithHashes.substr(12, 4)}`;
    }
    return '';
};

export const formatExpiryString = (value: string) => {
    const replaced = value.replace(/\s|\//g, '');
    if (replaced.length <= 4) {
        return `${replaced.substr(0, 2)}/${replaced.substr(2, 4)}`;
    }
    return false;
};

export const getCardIssuer = (number: string): TCardIssuer | null => {
    if (!number) {
        return null;
    }
    const typeObject = creditCardType(number);
    if (!typeObject.length) return null;
    return typeObject[0].type as TCardIssuer;
};

export const getCardLogo = (cardType: TCardIssuer | null): string => {
    switch (cardType) {
        case ECardIssuer.MASTERCARD:
            return '/img/mc.svg';
        case ECardIssuer.VISA:
            return '/img/visa.svg';
        default:
            return '';
    }
};

export const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
