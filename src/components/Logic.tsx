import React, { useCallback, useState } from 'react';
import { CardForm } from './CardForm';
import { formatExpiryString, formatNumberString } from 'common/utils';
import { animated as a, useSpring } from 'react-spring';
import { Card } from './Card';
import { inputT } from './interfaces';

export type formTouchedT = 'notTouched' | 'front' | 'back';
const animationConfig = { mass: 5, tension: 500, friction: 80 };

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const [expires, setExpires] = useState('03/77');
    const [cvv, setCvv] = useState('***');
    const [formState, setFormState] = useState<formTouchedT>('notTouched');

    const isFormChanged = formState === 'notTouched';
    const cardAnimationStyle = useSpring({
        transform: isFormChanged ? 'translateY(-200px)' : 'translateY(0)',
        opacity: isFormChanged ? 0 : 1,
        config: animationConfig,
    });

    const formAnimationStyle = useSpring({
        transform:
            formState === 'notTouched' ? 'translateY(-100px)' : 'translateY(0)',
        config: animationConfig,
    });

    const handleChangeNumber = useCallback((value: inputT) => {
        if (value !== null) {
            const formattedNumber = formatNumberString(value);
            if (formattedNumber) {
                setNumber(formattedNumber);
            }
        }
    }, []);
    const handleChangeName = useCallback((value: inputT) => {
        if (value !== null) {
            setName(value.toUpperCase());
        }
    }, []);
    const handleChangeExpires = useCallback((value: inputT) => {
        if (value !== null) {
            const formattedExpires = formatExpiryString(value);
            if (formattedExpires) {
                setExpires(formattedExpires);
            }
        }
    }, []);
    const handleChangeCvv = useCallback((value: inputT) => {
        if (value !== null) {
            setCvv(value);
        }
    }, []);

    return (
        <>
            <a.div style={cardAnimationStyle}>
                <Card
                    number={number}
                    name={name}
                    expires={expires}
                    cvv={cvv}
                    cardSide={formState}
                />
            </a.div>
            <a.div style={formAnimationStyle}>
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
