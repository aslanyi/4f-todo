import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Icon from '../../utils/icon';

const CheckboxContainer = styled.div``;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    position: relative;
    overflow: hidden;
    display: none;
`;

const StyledCheckbox = styled.div`
    width: 15px;
    height: 15px;
    display: inline-block;
    border: 2px solid #d5d5d5;
    border-radius: 4px;
    ${HiddenCheckbox}:checked + & {
        background: #18a0fb;
        border-color: #18a0fb;
    }
    &:hover {
        border-color: #18a0fb;
    }
`;

const Checkbox = ({ checked, icon, ...props }) => (
    <CheckboxContainer>
        <HiddenCheckbox defaultChecked={checked} {...props} />
        <StyledCheckbox checked={checked} {...props}>
            <Icon icon={icon} style={{ visibility: checked ? 'visible' : 'hidden' }} size='16px' />
        </StyledCheckbox>
    </CheckboxContainer>
);

Checkbox.propTypes = {
    checked: propTypes.bool,
    icon: propTypes.string,
};

export default Checkbox;
