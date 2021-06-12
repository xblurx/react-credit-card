import React from 'react';
import {
    BackCardWrapper,
    CardBackContent,
    CardBackCVV,
    CardBlackLine,
    CardSecret,
} from 'styled/CreditCardBackSC';

interface PropTypes {
    cvv: string;
}

export const BackCardDisplay = (props: PropTypes) => {
    return (
        <BackCardWrapper>
            <CardBlackLine />
            <CardBackContent>
                <CardSecret>
                    <CardBackCVV>{props.cvv}</CardBackCVV>
                </CardSecret>
            </CardBackContent>
        </BackCardWrapper>
    );
};
