import React from 'react';
import { animated as a, useSpring } from 'react-spring';
import { CardDisplay } from './CardDisplay';
import { BackCardDisplay } from './BackCardDisplay';
import { CCPropType } from './interfaces';
import { GlobalCardWrapper } from 'styled/CreditCardSC';

export const Card = (props: CCPropType) => {
    const { logo, number, name, expires, cvv, cardSide } = props;
    const flipped = cardSide === 'back';
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(800px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <GlobalCardWrapper>
            <a.div
                style={{
                    opacity: opacity.interpolate((o: any) => 1 - o),
                    transform,
                }}
            >
                <CardDisplay
                    logo={logo}
                    number={number}
                    name={name}
                    expires={expires}
                    cardSide={cardSide}
                />
            </a.div>
            <a.div
                style={{
                    opacity,
                    transform: transform.interpolate(
                        (t) => `${t} rotateY(180deg)`
                    ),
                }}
            >
                <BackCardDisplay cvv={cvv} />
            </a.div>
        </GlobalCardWrapper>
    );
};
