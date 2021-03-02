import React, { useEffect } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { CardDisplay } from './CardDisplay';
import { BackCardDisplay } from './BackCardDisplay';
import { CCPropType } from './interfaces';

export const Card = (props: CCPropType) => {
    const { logo, number, name, expires, cvv, cardSide } = props;
    const flipped = cardSide === 'back';
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        // config: config.gentle,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    useEffect(() => {
        console.log(`Card: cardside: ${cardSide}`);
        console.log(`Card: flipped: ${flipped}`);
    }, [cardSide]);

    return (
        <>
            <animated.div
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
                    cvv={cvv}
                    cardSide={cardSide}
                />
            </animated.div>
            <animated.div
                style={{
                    opacity,
                    transform: transform.interpolate(
                        (t) => `${t} rotateY(180deg)`
                    ),
                }}
            >
                <BackCardDisplay />
            </animated.div>
        </>
    );
};
