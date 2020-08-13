import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../utils/icon';

const StyledButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 10px;
    
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.primaryColor};
    border: 0;
    border-radius: 5px;
    font-size: ${(props) => props.fontSize}};

    :hover {
        background-color: #34aff9;
    }

    :focus {
        outline: none;
    }
    
    ${(props) =>
        props.socialButton &&
        css`
            background-color: ${(props) => props.theme.secondaryColor};
            color: ${(props) => props.theme.textColor};
            box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);
            border: 1px solid ${(props) => props.theme.borderColor};
            :hover {
                background-color: ${(props) => props.theme.secondaryColor};
            }
            justify-content:flex-start;
        `};
`;

const ButtonText = styled.span`
    line-height: 2.2rem;
    margin:0 auto;
    ${(props) =>
        props.socialButton &&
        css`
            align-self:center;
            order: 1;
        `};
`;

const ButtonDivider = styled.div`
    height:100%;
    border-right: 1px solid ${(props) => props.theme.borderColor}80;

    ${(props) =>
        props.socialButton &&
        css`
            height: 0;
        `};
`;

const Button = ({ text, icon, iconSize, iconColor, ...props }) => {
    return (
        <StyledButton {...props}>
            <ButtonText {...props}>{text}</ButtonText>
            {icon ? <ButtonDivider {...props} /> : null }
            <Icon icon={icon} size={iconSize} color={iconColor} style={{ margin: props.socialButton ? '0 15px' : '0 auto' }}/>
        </StyledButton>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    socialButton: PropTypes.bool,
};

export default Button;
