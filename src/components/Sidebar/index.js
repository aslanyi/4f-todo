import React from 'react';
import { Content, SidebarContent } from './styled';

const Sidebar = ({ sidebarContent, children, isOpen, minWidth, maxWidth, isOver, hasShadow }) => {
    const sidebarWidth = minWidth && !isOpen ? minWidth : isOpen ? maxWidth : 0;
    return (
        <>
            <SidebarContent width={sidebarWidth} isOpen={isOpen} hasShadow={hasShadow}>
                {sidebarContent}
            </SidebarContent>
            <Content style={{ left: `${isOpen && !isOver ? maxWidth : isOver ? 0 : minWidth ?? 0}px` }}>{children}</Content>
        </>
    );
};

export default Sidebar;
