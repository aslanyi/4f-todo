import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../../src/components/Input';
Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        placeholder: 'Bir şeyler girin',
    };

    const enzymeWrapper = shallow(<Input {...props} />);

    return {
        props,
        enzymeWrapper,
    };
}

describe('Input component test', () => {
    it('should render input with placeholder', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.props().placeholder).toEqual('Bir şeyler girin');
    });
});
