import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../utils/icon';
import PropTypes from 'prop-types';

const BasicInput = styled.input`
    width: 325px;
    height: 50px;
    color: ${(props) => props.theme.textColor};
    box-sizing: border-box;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    padding-left: ${(props) => props.paddingLeft};
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 5px;
    font-family: 'SF UI Display Light';
    font-size: 1.3rem;
    font-weight: normal;
    line-height: 1.8rem;

    :hover {
        box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);
    }

    :focus {
        box-shadow: 0px 4px 8px rgba(50, 50, 71, 0.06), 0px 4px 4px rgba(50, 50, 71, 0.08);
        outline: none;
    }

    ::placeholder {
        color: ${(props) => props.theme.placeholderColor};
        font-family: 'SF UI Display Regular';
    }

    ${(props) =>
        props.isInvalid == true &&
        css`
            border: 1px solid ${(props) => props.theme.successColor};
            color: ${(props) => props.theme.successColor};
            box-shadow: 0px 8px 8px rgba(0, 196, 140, 0.1);
        `};

    ${(props) =>
        props.isInvalid == false &&
        css`
            border: 1px solid ${(props) => props.theme.dangerColor};
            color: ${(props) => props.theme.dangerColor};
            box-shadow: 0px 8px 8px rgba(255, 100, 124, 0.1);
        `};

    ${(props) =>
        props.searchInput &&
        css`
            height: 60px;
            width: 100%;
            border: 0;
            border-radius: 0px;

            :hover {
                box-shadow: none;
            }

            :focus {
                box-shadow: none;
            }
        `};
`;

const Container = styled.div`
    position: relative;
`;

const iconStyle = {
    paddingLeft: '45px',
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    transform: 'translate(-50%, -50%)',
};

Input.propTypes = {
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
};

Input.defaultProps = {
    iconSize: '20px',
    iconColor: '#999',
};

function Input(props) {
    return props.icon ? (
        <Container>
            <Icon icon={props.icon} size={props.iconSize} color={props.iconColor} style={iconStyle} />
            <BasicInput paddingLeft="2.5rem" {...props} />
        </Container>
    ) : (
        <BasicInput paddingLeft="2rem" {...props} />
    );
}

export default Input;
