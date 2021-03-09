import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import { animated as a, config, useSpring } from 'react-spring';
import { CardLogo } from 'styled/CreditCardSC';
import { figureCardLogo, usePrevious } from 'common/utils';
import logoEmpty from 'common/assets/empty.svg';

interface LogoPropType {
    cardType: string | false;
}

export const Logo = (props: LogoPropType) => {
    const { cardType } = props;
    const [logo, setLogo] = useState(logoEmpty);
    const [opacity, setOpacity] = useSpring(() => ({
        opacity: 0,
    }));
    const [transform, setTransform] = useSpring(() => ({
        transform: 'translateX(-40px)',
    }));

    useEffect(() => {
        if (cardType) {
            const logoUpdated = figureCardLogo(cardType);
            if (logoUpdated !== undefined) {
                setLogo(logoUpdated);
                setOpacity({ opacity: 1 });
                setTransform({ transform: 'translateX(0px)' });
            }
        } else {
            setOpacity({ opacity: 0 });
            setTransform({ transform: 'translateX(-40px)' });
        }
    }, [cardType]);

    return (
        <a.div style={{ ...opacity, ...transform }}>
            <CardLogo>
                <Image src={logo} alt="Card logo" boxSize="80px" />
            </CardLogo>
        </a.div>
    );
};
