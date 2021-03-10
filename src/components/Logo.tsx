import React, { useCallback, useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { animated as a, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import { figureCardLogo } from 'common/utils';
import logoEmpty from 'common/assets/empty.svg';

interface LogoPropType {
    cardType: string | false;
}

export const Logo = (props: LogoPropType) => {
    const { cardType } = props;
    const [logo, setLogo] = useState<string>(logoEmpty);
    const [opacity, setOpacity] = useSpring(() => ({
        opacity: 0,
    }));
    const [transform, setTransform] = useSpring(() => ({
        transform: 'translateX(-40px)',
    }));

    const LogoImage = useCallback(() => {
        return <Image src={logo} alt="Card logo" boxSize="80px" />;
    }, [logo]);

    useEffect(() => {
        if (cardType) {
            const logoUpdated = figureCardLogo(cardType);
            setLogo(logoUpdated);
            setTransform({ transform: 'translateX(0px)' });
            setOpacity({ opacity: 1 });
        } else {
            setTransform({ transform: 'translateX(-40px)' });
            setOpacity({ opacity: 0 });
        }
    }, [cardType]);

    return (
        <a.div style={{ ...opacity, ...transform }}>
            <CardLogo>
                <LogoImage />
            </CardLogo>
        </a.div>
    );
};
