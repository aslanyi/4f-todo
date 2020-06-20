import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
    display: flex;
    max-width: ${(p) => p.width};
    max-height: ${(p) => p.height};
    min-height: ${(p) => p.minHeight};
    min-width: ${(p) => p.minWidth};
    justify-content: ${(p) => p.justifyContent};
    align-items: ${(p) => p.alignItems};
    flex-flow: ${(p) => `${p.flexDirection}  ${p.flexWrap}`};
    align-content: ${(p) => p.alignContent};
    padding: ${(p) => p.padding};
`;

Container.defaultProps = {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    minHeight: 'auto',
    minWidth: 'auto',
    padding: 0,
};

export const Item = styled.div`
    flex: ${(p) => `${p.grow} ${p.shrink} ${p.basis}`};
    order: ${(p) => p.order};
    align-self: ${(p) => p.alignSelf};
    width: ${(p) => p.width};
`;

Item.defaultProps = {
    order: 0,
    grow: 0,
    shrink: 1,
    basis: 'auto',
    alignSelf: 'flex-start',
    width: '100%',
};

Item.propTypes = {
    order: PropTypes.number,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.string,
    alignSelf: PropTypes.string,
};

const Flex = {
    Container,
    Item,
};

export default Flex;
