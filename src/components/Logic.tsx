import * as React from 'react';
import { useCallback, useState } from 'react';
import { CardForm } from './CardForm';
import {
    getCardIssuer,
    formatExpiryString,
    formatNumberString,
    getCardLogo,
} from 'common/utils';
import { animated as a, useSpring } from 'react-spring';
import { Card } from './Card';
import { TInput } from './interfaces';
// import mastercardImg from 'common/assets/mc_vrt_pos.svg';
// import visaImg from 'common/assets/visa.svg';

export type TFormTouched = 'notTouched' | 'front' | 'back';
export enum ECardIssuer {
    'MASTERCARD' = 'mastercard',
    'VISA' = 'visa',
}
export type TCardIssuer = `${ECardIssuer}`;

// const preloadLogos = () => {
//     const mastercard = (document.createElement('img').src = mastercardImg);
//     const visa = (document.createElement('img').src = visaImg);
//     return { mastercard, visa };
// };
// preloadLogos();

const initialCardNumber = '#### #### #### ####';

export const Logic = () => {
    const [number, setNumber] = useState(initialCardNumber);
    const [name, setName] = useState<string>('CARDHOLDER');
    const [expires, setExpires] = useState<string>('03/77');
    const [cvv, setCvv] = useState<string>('***');
    const [formState, setFormState] = useState<TFormTouched>('notTouched');
    const [currentLogoSrc, setCurrentLogoSrc] = useState<string | null>(null);

    const aConfig = { mass: 5, tension: 500, friction: 80 };
    const change = formState === 'notTouched';
    const animationStyle = useSpring({
        transform: change ? 'translateY(-200px)' : 'translateY(0)',
        opacity: change ? 0 : 1,
        config: aConfig,
    });
    const formAnimStyle = useSpring({
        transform:
            formState === 'notTouched' ? 'translateY(-100px)' : 'translateY(0)',
        config: aConfig,
    });

    const handleChangeNumber = useCallback((value: TInput) => {
        if (!value) {
            setNumber(initialCardNumber);
            setCurrentLogoSrc(null);
            return;
        }

        const cardLogo = getCardIssuer(value);
        const formattedNumber = formatNumberString(value);

        if (cardLogo) {
            setCurrentLogoSrc(getCardLogo(cardLogo));
        }

        setNumber(formattedNumber);
    }, []);

    const handleChangeName = useCallback((value: TInput) => {
        !!value && setName(value.toUpperCase());
    }, []);

    const handleChangeExpires = useCallback((value: TInput) => {
        if (!!value) {
            const formattedExpires = formatExpiryString(value);
            if (formattedExpires) {
                setExpires(formattedExpires);
            }
        }
    }, []);

    const handleChangeCvv = useCallback((value: TInput) => {
        !!value && setCvv(value);
    }, []);

    return (
        <>
            <a.div style={animationStyle}>
                <Card
                    logo={currentLogoSrc}
                    number={number}
                    name={name}
                    expires={expires}
                    cvv={cvv}
                    cardSide={formState}
                />
            </a.div>
            <a.div style={formAnimStyle}>
                <CardForm
                    handleChangeNumber={handleChangeNumber}
                    handleChangeName={handleChangeName}
                    handleChangeExpires={handleChangeExpires}
                    handleChangeCvv={handleChangeCvv}
                    setFormTouched={setFormState}
                    formTouched={formState}
                />
            </a.div>
        </>
    );
};
