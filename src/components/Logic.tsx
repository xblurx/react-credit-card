import React, { useEffect, useState } from 'react';
import { CardForm } from './CardForm';
import MasterCardLogo from 'common/assets/mc_vrt_pos.svg';
import { formatExpiryString, formatNumberString } from 'common/utils';
import { animated as a, config, useSpring } from 'react-spring';
import { Card } from './Card';
import { inputT } from './interfaces';

export type formTouchedT = 'notTouched' | 'front' | 'back';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const [expires, setExpires] = useState('03/77');
    const [cvv, setCvv] = useState('***');
    const [formState, setFormState] = useState<formTouchedT>('notTouched');

    const aConfig = { mass: 5, tension: 500, friction: 80 };
    const animationStyle = useSpring({
        transform:
            formState === 'notTouched' ? 'translateY(-200px)' : 'translateY(0)',
        opacity: formState !== 'notTouched' ? 1 : 0,
        config: aConfig,
    });

    const formAnimStyle = useSpring({
        transform:
            formState === 'notTouched' ? 'translateY(-100px)' : 'translateY(0)',
        config: aConfig,
    });

    const handleChangeNumber = (value: inputT) => {
        if (value !== null) {
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

    useEffect(() => {
        console.log(number);
    }, [number]);

    return (
        <>
            <a.div style={animationStyle}>
                <Card
                    logo={MasterCardLogo}
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
