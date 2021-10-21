import React from 'react';
import { Text } from '@chakra-ui/react';
import {
    CardHolder,
    CardInfo,
    CardInfoExpiry,
    CardNumber,
    CardWrapper,
} from 'styled/CreditCardSC';
import { ICard } from './interfaces';
import { Logo } from './Logo';

export const CardDisplay = (props: Omit<ICard, 'cvv'>) => {
    const { number, name, expires, logo } = props;

    return (
        <CardWrapper>
            <Logo logo={logo} />
            <CardNumber>{number}</CardNumber>
            <CardInfo>
                <CardHolder>
                    <Text fontSize="xl">{name}</Text>
                </CardHolder>
                <CardInfoExpiry>
                    <Text fontSize="xs">VALID THRU</Text>
                    <Text fontSize="lg">{expires}</Text>
                </CardInfoExpiry>
            </CardInfo>
        </CardWrapper>
    );
};
