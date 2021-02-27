import React from 'react';
import {
    CardInfoExpiry,
    CardInfoLabel,
    CardInfo,
    CardNumber,
    CardWrapper,
} from 'styled/CreditCardSC';

interface CCPropType {
    logo: any;
    number: string;
    name: string;
    expires: string;
}

const Logo = (props: any) => {
    return <div>{props.img}</div>;
};

export const CardDisplay = (props: CCPropType) => {
    return (
        <CardWrapper>
            <Logo src={props.logo} />
            <CardNumber>{props.number}</CardNumber>
            <CardInfo>
                <CardInfoLabel>CARDHOLDER'S NAME</CardInfoLabel>
                <div>{props.name}</div>
                <CardInfoExpiry>
                    <CardInfoLabel>VALID UP TO</CardInfoLabel>
                    <div>{props.expires}</div>
                </CardInfoExpiry>
            </CardInfo>
        </CardWrapper>
    );
};
