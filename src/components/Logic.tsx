import React, { useEffect, useState } from 'react';
import { CardDisplay } from './CardDisplay';
import { CardForm } from './CardForm';
import MasterCardLogo from 'common/assets/mc_vrt_pos.svg';
import { formatString } from '../common/utils/utils';

export const Logic = () => {
    const [number, setNumber] = useState('#### #### #### ####');
    const [name, setName] = useState('CARDHOLDER');
    const handleChangeNumber = (value: string) => {
        const formattedNumber = formatString(value);
        if (formattedNumber) {
            setNumber(formattedNumber);
        }
    };
    useEffect(() => {
        console.log(number)
    })
    return (
        <>
            <CardDisplay
                logo={MasterCardLogo}
                number={number}
                expires={'02/77'}
                name={name}
            />
            <CardForm handleChangeNumber={handleChangeNumber} />
        </>
    );
};
