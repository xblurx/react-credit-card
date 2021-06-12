import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }`;

export const CardWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 400px;
    height: 250px;
    padding: 25px;
    border-radius: 15px;
    color: white;
    background-size: 400% 400%;
    background-image: linear-gradient(
        -45deg,
        #ee7752,
        #e73c7e,
        #23a6d5,
        #23d5ab
    );
    animation: ${gradientAnimation} 15s ease infinite;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

export const CardLogo = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CardNumber = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Kredit', sans-serif;
    font-size: 36px;
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Open Sans', sans-serif;
    font-size: 25px;
`;

export const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CardInfoExpiry = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GlobalCardWrapper = styled.div`
    perspective: 800px;
`;
