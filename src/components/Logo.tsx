import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { animated as a, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import { figureCardLogo, figureCardType } from 'common/utils';

interface IProps {
    number: string;
}

const ImageContainer = (props: any) => {
    return props.src ? (
        <Image src={props.src} alt="card logo" boxSize="80px" />
    ) : (
        <Box boxSize="80px" />
    );
};

export const Logo = ({ number }: IProps) => {
    const [logo, setLogo] = useState<string>('');
    const { opacity, transform } = useSpring({
        opacity: logo ? 0 : 1,
        transform: `translateX(${logo ? 0 : -40}px)`,
    });

    useEffect(() => {
        setLogo(figureCardLogo(figureCardType(number)));
    }, [number]);

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
