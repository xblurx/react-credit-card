import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { animated as a, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import { figureCardLogo } from 'common/utils';
import logoEmpty from 'common/assets/empty.svg';

interface LogoPropType {
    cardType: string | false;
}

const ImageContainer = (props: any) => {
    return props.src ? (
        <Image src={props.src} alt="card logo" fallbackSrc={logoEmpty} boxSize="80px" />
    ) : (
        <Box boxSize="80px" />
    );
};

export const Logo = (props: LogoPropType) => {
    const { cardType } = props;
    const [logo, setLogo] = useState<string | boolean>('');
    const { opacity, transform } = useSpring({
        opacity: logo ? 0 : 1,
        transform: `translateX(${logo ? 0 : -40}px)`,
    });

    useEffect(() => {
        const logoUpdated = figureCardLogo(cardType);
        setLogo(logoUpdated);
    }, [cardType]);

    return (
        <a.div
            style={{
                opacity: opacity.interpolate((o: any) => 1 - o),
                transform,
            }}
        >
            <CardLogo>
                <ImageContainer src={logo} />
            </CardLogo>
        </a.div>
    );
};
