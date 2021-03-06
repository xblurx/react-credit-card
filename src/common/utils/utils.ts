import logoMC from 'common/assets/mc_vrt_pos.svg';
import logoVisa from 'common/assets/visa.svg';

export const formatNumberString = (value: string) => {
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
    return false;
};

export const formatExpiryString = (value: string) => {
    const replaced = value.replace(/\s|\//g, '');
    if (replaced.length <= 4) {
        return `${replaced.substr(0, 2)}/${replaced.substr(2, 4)}`;
    }
    return false;
};

export const figureCardType = (number: string) => {
    if (!number) {
        return false;
    }
    const creditCardType = require('credit-card-type');
    const typeObject = creditCardType(number);
    // console.log(`figureCardType: ${type[0]}`);
    if (!typeObject.length) return false;
    return typeObject[0].type;
};

export const figureCardLogo = (cardType: string) => {
    let logo: any;
    switch (cardType) {
        case 'mastercard':
            return logoMC;
        case 'visa':
            return logoVisa;
        default:
            return false;
    }
};
