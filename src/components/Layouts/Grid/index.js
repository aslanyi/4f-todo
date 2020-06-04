import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
    display: grid;
    grid: ${(p) => p.grid};
    grid-template-columns: ${(p) => p.gridTemplateColumns};
    grid-template-rows: ${(p) => p.gridTemplateRows};
    grid-template-areas: ${(p) => p.gridTemplateAreas};
    grid-template: ${(p) => p.gridTemplate};
    grid-auto-flow: ${(p) => p.gridAutoFlow};
    grid-auto-columns: ${(p) => p.gridAutoColumns};
    grid-auto-rows: ${(p) => p.gridAutoRows};
    grid-gap: ${(p) => p.gridGap};
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    align-items: ${(p) => p.alignItems};
    align-content: ${(p) => p.alignContent};
    padding: ${(p) => p.padding};
`;

Container.defaultProps = {
    height: '100vh',
};

Container.propTypes = {
    grid: PropTypes.string,
    gridTemplateColumns: PropTypes.string,
    gridTemplateRows: PropTypes.string,
    gridTemplateAreas: PropTypes.string,
    gridTemplate: PropTypes.string,
    gridAutoFlow: PropTypes.string,
    gridAutoColumns: PropTypes.string,
    gridAutoRows: PropTypes.string,
    gridGap: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    padding: PropTypes.string,
};

export const Item = styled.div`
    grid-column: ${(p) => p.gridColumn};
    grid-column-start: ${(p) => p.gridColumnStart};
    grid-column-gap: ${(p) => p.gridColumnGap};
    grid-column-end: ${(p) => p.gridColumnEnd};
    grid-row: ${(p) => p.gridRow};
    grid-row-start: ${(p) => p.gridRowStart};
    grid-row-gap: ${(p) => p.gridRowGap};
    grid-row-end: ${(p) => p.gridRowEnd};
    grid-area: ${(p) => p.gridArea};
    background-color: ${(p) => p.backgroundColor};
    align-items: ${(p) => p.alignItems};
    text-align: ${(p) => p.textAlign};
    height: ${(p) => p.height};
    width: ${(p) => p.width};
    margin: ${(p) => p.margin};
`;

Item.defaultProps = {
    width: '100%',
    height: '100%',
    margin: 'auto',
};

Item.propTypes = {
    gridColumn: PropTypes.string,
    gridColumnStart: PropTypes.string,
    gridColumnGap: PropTypes.string,
    gridColumnEnd: PropTypes.string,
    gridRow: PropTypes.string,
    gridRowStart: PropTypes.string,
    gridRowGap: PropTypes.string,
    gridRowEnd: PropTypes.string,
    gridArea: PropTypes.string,
    textAlign: PropTypes.string,
    height: PropTypes.string,
};

const Grid = {
    Container,
    Item,
};

export default Grid;
