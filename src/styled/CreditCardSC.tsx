import styled from 'styled-components';

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
    background-image: linear-gradient(
        to right bottom,
        #fd696b,
        #fa616e,
        #f65871,
        #f15075,
        #ec4879
    );
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
