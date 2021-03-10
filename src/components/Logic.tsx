import React, { useState } from 'react';
import { CardForm } from './CardForm';
import {
    figureCardType,
    formatExpiryString,
    formatNumberString,
} from 'common/utils';
import { animated as a, useSpring } from 'react-spring';
import { Card } from './Card';
import { inputT } from './interfaces';

export type formTouchedT = 'notTouched' | 'front' | 'back';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [cardType, setCardType] = useState<string | false>('');
    const [name, setName] = useState('CARDHOLDER');
    const [expires, setExpires] = useState('03/77');
    const [cvv, setCvv] = useState('***');
    const [formState, setFormState] = useState<formTouchedT>('notTouched');

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

    const handleChangeNumber = (value: inputT) => {
        if (value !== null) {
            const cardType = figureCardType(value);
            // console.log(`Logic cardType: ${cardType}`);
            setCardType(cardType);
            const formattedNumber = formatNumberString(value);
            if (formattedNumber) {
                setNumber(formattedNumber);
            }
        }
    };
    const handleChangeName = (value: inputT) => {
        if (value !== null) {
            setName(value.toUpperCase());
        }
    };
    const handleChangeExpires = (value: inputT) => {
        if (value !== null) {
            const formattedExpires = formatExpiryString(value);
            if (formattedExpires) {
                setExpires(formattedExpires);
            }
        }
    };
    const handleChangeCvv = (value: inputT) => {
        if (value !== null) {
            setCvv(value);
        }
    };

    return (
        <>
            <a.div style={animationStyle}>
                <Card
                    cardType={cardType}
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
