import React, { useState } from 'react';
import Checkbox from './index';

export default { title: 'Checkbox' };

export const Default = () => {
    const [isChecked, setIsChecked] = useState();
    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return <Checkbox checked={isChecked} onClick={handleClick} icon="tick" />;
};
