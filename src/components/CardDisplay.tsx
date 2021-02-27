import React from 'react';
import { Text } from '@chakra-ui/react';
import {
    CardHolder,
    CardInfo,
    CardInfoExpiry,
    CardLogo,
    CardNumber,
    CardWrapper,
} from 'styled/CreditCardSC';

interface CCPropType {
    logo: any;
    number: string;
    name: string;
    expires: string;
}

interface LogoPropType {
    logo: any;
}

const Logo = (props: LogoPropType) => {
    return <CardLogo>{props.logo}</CardLogo>;
};

export const CardDisplay = (props: CCPropType) => {
    return (
        <CardWrapper>
            <Logo logo={props.logo} />
            <CardNumber>{props.number}</CardNumber>
            <CardInfo>
                <CardHolder>
                    <Text fontSize="md">CARDHOLDER</Text>
                    <Text fontSize="lg">{props.name}</Text>
                </CardHolder>
                <CardInfoExpiry>
                    <Text fontSize="md">VALID UP TO</Text>
                    <Text fontSize="lg">{props.expires}</Text>
                </CardInfoExpiry>
            </CardInfo>
        </CardWrapper>
    );
};
