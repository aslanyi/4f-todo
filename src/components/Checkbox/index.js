import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../utils/icon';

const CheckboxContainer = styled.div`
    position: relative;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    position: absolute;
    opacity: 0;
    left: -100%;
`;

const StyledCheckbox = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    box-sizing: border-box;
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.borderColor};
    border-radius: 4px;
    pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};
    ${HiddenCheckbox}:checked + & {
        background: ${(p) => (p.disabled ? p.theme.borderColor : p.theme.primaryColor)};
        border-color: ${(p) => (p.disabled ? p.theme.borderColor : p.theme.primaryColor)};
    }
    &:hover {
        border-color: ${(props) => props.theme.primaryColor};
    }
`;

const CheckboxLabel = styled.span`
    position: absolute;
    top: 0;
    left: 2rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
    -moz-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
`;

const Checkbox = ({ checked, icon, label, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox defaultChecked={checked} {...props} />
        <StyledCheckbox checked={checked} {...props}>
            <Icon icon={icon} style={{ visibility: checked ? 'visible' : 'hidden', width: '100%', height: '100%' }} size="1rem" />
            <CheckboxLabel>{label}</CheckboxLabel>
        </StyledCheckbox>
    </CheckboxContainer>
);

Checkbox.propTypes = {
    checked: propTypes.bool.isRequired,
    icon: propTypes.string,
    label: propTypes.string,
};

Checkbox.defaultProps = {
    icon: 'tick',
    label: '',
};

export default Checkbox;
