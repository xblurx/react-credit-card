import React from 'react';
import {
    BackCardWrapper,
    CardBackContent,
    CardBlackLine,
    CardSecret,
} from 'styled/CreditCardBackSC';

export const BackCardDisplay = () => {
    return (
        <BackCardWrapper>
            <CardBlackLine />
            <CardBackContent>
                <CardSecret />
            </CardBackContent>
        </BackCardWrapper>
    );
};
