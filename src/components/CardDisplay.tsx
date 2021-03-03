import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import {
    CardHolder,
    CardInfo,
    CardInfoExpiry,
    CardLogo,
    CardNumber,
    CardWrapper,
} from 'styled/CreditCardSC';
import { CCPropType, LogoPropType } from './interfaces';

const Logo = (props: LogoPropType) => {
    return (
        <CardLogo>
            <Image src={props.logo} alt="Card logo" boxSize="80px" />
        </CardLogo>
    );
};

export const CardDisplay = (props: Omit<CCPropType, 'cvv'>) => {
    return (
        <CardWrapper>
            <Logo logo={props.logo} />
            <CardNumber>{props.number}</CardNumber>
            <CardInfo>
                <CardHolder>
                    <Text fontSize="xl">{props.name}</Text>
                </CardHolder>
                <CardInfoExpiry>
                    <Text fontSize="xs">VALID THRU</Text>
                    <Text fontSize="lg">{props.expires}</Text>
                </CardInfoExpiry>
            </CardInfo>
        </CardWrapper>
    );
};
