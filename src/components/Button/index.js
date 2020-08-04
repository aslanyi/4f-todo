import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../utils/icon';

const StyledButton = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 0;
    padding: 0;
    
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
        `};
`;

const ButtonText = styled.span`
    margin: auto;
    line-height: 2.2rem;
    ${(props) =>
        props.socialButton &&
        css`
            margin-left: 40px;
            order: 1;
        `};
`;

const ButtonDivider = styled.div`
    height: calc(${(props) => props.height} - 40%);
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
            <Icon icon={icon} size={iconSize} color={iconColor} style={{ margin: props.socialButton ? '0 15px' : '0 auto' }} />
        </StyledButton>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    width: PropTypes.string,
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    socialButton: PropTypes.bool,
};

export default Button;
