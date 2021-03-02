import React, { useEffect, useState } from 'react';
import { CardForm, inputT } from './CardForm';
import MasterCardLogo from 'common/assets/mc_vrt_pos.svg';
import { formatString } from 'common/utils';
import { animated as a, config, useSpring } from 'react-spring';
import { Card } from './Card';

export type formTouchedT = 'notTouched' | 'front' | 'back';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const [formState, setFormState] = useState<formTouchedT>('notTouched');

    const animationStyle = useSpring({
        transform:
            formState === 'notTouched' ? 'translateY(-200px)' : 'translateY(0)',
        opacity: formState !== 'notTouched' ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const handleChangeNumber = (value: inputT) => {
        if (value !== null) {
            const formattedNumber = formatString(value);
            if (formattedNumber) {
                setNumber(formattedNumber);
            }
        }
    };
    const handleChangeName = (value: inputT) => {
        if (value !== null) {
            console.log(`name: ${value}`);
            setName(value.toUpperCase());
        }
    };

    useEffect(() => {
        console.log(number);
    }, [number]);

    useEffect(() => {
        console.log(formState);
    }, [formState]);

    return (
        <>
            <div>
                <a.div style={animationStyle}>
                    <Card
                        logo={MasterCardLogo}
                        number={number}
                        name={name}
                        expires="02/77"
                        cvv={451}
                        cardSide={formState}
                    />
                </a.div>
            </div>
            <CardForm
                handleChangeNumber={handleChangeNumber}
                handleChangeName={handleChangeName}
                setFormTouched={setFormState}
                formTouched={formState}
            />
        </>
    );
};
