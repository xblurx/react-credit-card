import * as React from 'react';
import { Image, Box } from '@chakra-ui/react';
import { animated as a, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import logoEmpty from 'common/assets/empty.svg';

interface ILogoProps {
    logo: string;
}

const ImageContainer = (props: any) => {
    return props.src ? (
        <Image
            src={props.src}
            alt="card logo"
            fallbackSrc={logoEmpty}
            boxSize="80px"
        />
    ) : (
        <Box boxSize="80px" />
    );
};

export const Logo = ({ logo }: ILogoProps) => {
    const { opacity, transform } = useSpring({
        opacity: logo ? 0 : 1,
        transform: `translateX(${logo ? 0 : -40}px)`,
    });

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
