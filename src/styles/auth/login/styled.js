import styled from 'styled-components';
import Flex from 'src/components/Layouts/Flex';

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

export const InputContainer = styled.div`
    margin-bottom: 20px;
    width: 325px;
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

export const ForgetPasswordText = styled.span`
    color: ${(p) => `${p.theme.primaryColor}`};
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
`;

export const RegisterTextContainer = styled.div`
    & span:first-child {
        color: grey;
        cursor: text;
        user-select: text;
    }
    margin-top: 30px;
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

export const ErrorText = styled.span`
    color: red;
    font-size: 14px;
    font-weight: 600;
    align-self: flex-start;
    margin-top: 10px;
    display: inline-block;
`;
