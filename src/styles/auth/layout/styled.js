import styled from 'styled-components';
import Flex from '@components/Layouts/Flex';
export const Wrapper = styled.div`
    height: 100vh;
    min-width: 1180px;
    background: url('/images/auth_bg.png') no-repeat;
    background-size: cover;
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 5px;
`;

export const Container = styled(Flex.Container)`
    position: relative;
    padding: 26px 37px 70px;
    &::after {
        content: '';
        height: 100%;
        width: 1px;
        background-color: rgba(228, 228, 228, 0.8);
        position: absolute;
        right: 0;
        top: 0;
    }
`;

export const DescriptionText = styled.span`
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    color: #666666;
    display: inline-block;
    width: 276px;
    text-align: center;
    margin-bottom: 30px;
`;


export const Button = styled.button`
    border: none;
    background-color: ${(p) => `${p.theme.primaryColor}`};
    outline: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
    padding: 14px 0px;
    width: 100%;
    height: 50px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 30px;
`;

export const IconButton = styled(Button)`
    background-color: white;
    font-size: 13px;
    line-height: 18px;
    color: #151522;
    padding: 5px 12px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);

    & span {
        flex-basis: 80%;
    }
`;