import React, { useState } from 'react';
import Checkbox from './index';

export default { title: 'Checkbox' };

export const WithState = () => {
    const [isChecked, setIsChecked] = useState();
    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return <Checkbox checked={isChecked} onClick={handleClick} icon="tick" label="Deneme" />;
};

export const Checked = () => <Checkbox checked={true} icon="tick" />;

export const Unchecked = () => <Checkbox checked={false} icon="tick" />;

export const Disabled = () => <Checkbox disabled={true} />;

export const DisabledChecked = () => <Checkbox disabled={true} checked />;
