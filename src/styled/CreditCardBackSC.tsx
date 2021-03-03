import styled from 'styled-components';

export const BackCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 400px;
    height: 250px;
    padding: 25px 0;
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

export const CardBlackLine = styled.div`
    margin-top: 5px;
    height: 45px;
    background-color: #303030;
`;

export const CardBackContent = styled.div`
    padding: 35px 15px 0;
`;

export const CardSecret = styled.div`
    padding: 6px 19px;
    background-color: #fff;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: -6px;
        left: -3px;
        height: calc(100% + 13px);
        width: calc(100% - 60px);
        border-radius: 4px;
        background: repeating-linear-gradient(
            45deg,
            #ededed,
            #ededed 5px,
            #f9f9f9 5px,
            #f9f9f9 10px
        );
    }
`;

export const CardBackCVV = styled.div`
    color: #303030;
    text-align: right;
    margin: 0;
    font-size: 16px;
`;
