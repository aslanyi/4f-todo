import React, { useState } from 'react';
import Sidebar from './index';
import SidebarContent from './content';
export default { title: 'Sidebar' };

export const WithOver = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Sidebar isOpen={isSidebarOpen} minWidth={0} maxWidth={256} isOver={true} hasShadow={true} sidebarContent={<SidebarContent handleClick={() => setIsSidebarOpen(!isSidebarOpen)} isExpanded={isSidebarOpen} />}>
            <p>Content Sidebar</p>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Open</button>
        </Sidebar>
    );
};

export const WithOverless = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Sidebar isOpen={isSidebarOpen} minWidth={0} maxWidth={256} isOver={false} hasShadow={true} sidebarContent={<SidebarContent handleClick={() => setIsSidebarOpen(!isSidebarOpen)} isExpanded={isSidebarOpen} />}>
            <p>Content Sidebar</p>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>Open</button>
        </Sidebar>
    );
};

export const WithMinWidth = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Sidebar isOpen={isSidebarOpen} minWidth={56} maxWidth={256} isOver={false} hasShadow={true} sidebarContent={<SidebarContent handleClick={() => setIsSidebarOpen(!isSidebarOpen)} isExpanded={isSidebarOpen} />}>
            <p>Content Sidebar</p>
        </Sidebar>
    );
};

export const WithMinWidthOver = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Sidebar isOpen={isSidebarOpen} minWidth={56} maxWidth={256} isOver={true} hasShadow={true} sidebarContent={<SidebarContent handleClick={() => setIsSidebarOpen(!isSidebarOpen)} isExpanded={isSidebarOpen} />}>
            <p>Content Sidebar</p>
        </Sidebar>
    );
};

export const WithoutShadow = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Sidebar isOpen={isSidebarOpen} minWidth={56} maxWidth={256} isOver={true} hasShadow={false} sidebarContent={<SidebarContent handleClick={() => setIsSidebarOpen(!isSidebarOpen)} isExpanded={isSidebarOpen} />}>
            <p>Content Sidebar</p>
        </Sidebar>
    );
};
