import React from 'react';
import { Header, IconButton } from './styled';
import Icon from '../../../src/utils/icon';

const SidebarContent = ({ isExpanded, handleClick }) => {
    return (
        <div>
            <Header isExpanded={isExpanded}>
                <h2>4ftodo</h2>
                <IconButton isOpen={isExpanded} onClick={handleClick}>
                    <Icon icon="rightarrow" />
                </IconButton>
            </Header>
        </div>
    );
};

export default SidebarContent;
