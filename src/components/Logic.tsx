import React, { useEffect, useState } from 'react';
import { CardDisplay } from './CardDisplay';
import { CardForm, inputT } from './CardForm';
import MasterCardLogo from 'common/assets/mc_vrt_pos.svg';
import { formatString } from 'common/utils/utils';
import { useSpring, animated, config } from 'react-spring';

export type formTouchedT = 'notTouched' | 'front' | 'back';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const [formTouched, setFormTouched] = useState<formTouchedT>('notTouched');
    const animationStyle = useSpring({
        transform:
            formTouched === 'notTouched'
                ? 'translateY(-200px)'
                : 'translateY(0)',
        opacity: formTouched !== 'notTouched' ? 1 : 0,
        config: config.stiff,
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
        if (value) {
            console.log(`name: ${value}`);
            setName(value.toUpperCase());
        }
    };

    useEffect(() => {
        console.log(number);
    }, [number]);

    useEffect(() => {
        console.log(formTouched);
    }, [formTouched]);

    return (
        <>
            <animated.div style={animationStyle}>
                <CardDisplay
                    logo={MasterCardLogo}
                    number={number}
                    expires={'02/77'}
                    name={name}
                />
            </animated.div>
            <CardForm
                handleChangeNumber={handleChangeNumber}
                handleChangeName={handleChangeName}
                setFormTouched={setFormTouched}
                formTouched={formTouched}
            />
        </>
    );
};
