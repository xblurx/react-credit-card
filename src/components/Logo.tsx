import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { animated as a, config, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import { figureCardLogo, usePrevious } from 'common/utils';

interface LogoPropType {
    cardType: string;
}

export const Logo = (props: LogoPropType) => {
    const { cardType } = props;
    const [logo, setLogo] = useState<string | null>(null);
    const [cardTypeChanged, setCardTypeChanged] = useState<string>('');
    const prevCardType = usePrevious(cardTypeChanged);
    const change = cardTypeChanged === prevCardType;
    const animationStyle = useSpring({
        transform: change ? 'translateY(-40px)' : 'translateY(0px)',
        opacity: change ? 0 : 1,
        config: config.stiff,
    });
    const doApplyStyle = prevCardType !== cardType ? animationStyle : undefined;

    useEffect(() => {
        if (cardType) {
            const logoUpdated = figureCardLogo(cardType);
            if (logoUpdated !== undefined) {
                setLogo(logoUpdated);
            }
            setCardTypeChanged(cardType);
        }
    }, [cardType]);

    if (!logo) {
        return <Box boxSize="80px" />;
    }

    return (
        <a.div style={doApplyStyle}>
            <CardLogo>
                <Image src={logo} alt="Card logo" boxSize="80px" />
            </CardLogo>
        </a.div>
    );
};
