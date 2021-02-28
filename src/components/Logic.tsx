import React, { useEffect, useState } from 'react';
import { CardDisplay } from './CardDisplay';
import { CardForm, inputT } from './CardForm';
import MasterCardLogo from 'common/assets/mc_vrt_pos.svg';
import { formatString } from 'common/utils/utils';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const handleChangeNumber = (value: inputT) => {
        if (value ) {
            const formattedNumber = formatString(value);
            if (formattedNumber) {
                setNumber(formattedNumber);
            }
        }
    };
    const handleChangeName = (value: inputT) => {
        if (value ) {
            console.log(`name: ${value}`)
            setName(value.toUpperCase());
        }
    };

    useEffect(() => {
        console.log(number);
    }, [number]);

    return (
        <>
            <CardDisplay
                logo={MasterCardLogo}
                number={number}
                expires={'02/77'}
                name={name}
            />
            <CardForm
                handleChangeNumber={handleChangeNumber}
                handleChangeName={handleChangeName}
            />
        </>
    );
};
