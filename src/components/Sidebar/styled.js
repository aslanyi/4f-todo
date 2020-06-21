import styled, { css } from 'styled-components';

export const SidebarContent = styled.div`
    z-index: 2;
    position: absolute;
    min-width: ${(p) => `${p.width}px`};
    width: 0px;
    top: 0;
    left: 0;
    height: 100%;
    background-color: white;
    transition: min-width 0.3s ease-in-out;
    overflow: hidden;
    ${(p) =>
        p.hasShadow &&
        css`
            -webkit-box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
            -moz-box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
            box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
        `}
`;

export const Content = styled.div`
    position: absolute;
    transition: left 0.3s ease-in-out;
`;

export const Header = styled.header`
    padding: 16px 14px;
    position: relative;
    font-weight: 600;
    color: ${(p) => p.theme.primaryColor};
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
        content: '';
        position: absolute;
        height: 1px;
        background-color: #ebeff2;
        width: 100%;
        left: 0;
        bottom: 0;
    }

    & h2:first-child {
        font-size: ${(p) => (!p.isExpanded ? 0 : '100%')};
        transition: font-size 0.1s ease-in;
        margin: 0;
    }
`;

export const IconButton = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 28px;
    height: 28px;
    text-align: center;
    display: inline-block;
    padding: 0;

    & svg {
        transition: transform 0.3s ease-in;
        color: ${(p) => p.theme.primaryColor};
    }

    ${(p) =>
        p.isOpen &&
        css`
            & svg {
                transform: rotateY(180deg);
            }
        `}
`;
