import styled from 'styled-components';
import React from 'react';

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 250px;
    padding: 25px;
    border-radius: 15px;
    color: white;
    background-image: linear-gradient(25deg, #0f509e, #1399cd);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const CardNumber = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Kredit', sans-serif;
    font-size: 45px;
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;

    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
`;

export const CardInfoLabel = styled.div`
    font-size: 14px;
`;

export const CardInfoExpiry = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const Logo = (props: any) => {
    return <div>{props}</div>;
};
