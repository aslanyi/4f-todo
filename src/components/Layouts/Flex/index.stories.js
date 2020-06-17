import React from 'react';
import Flex from './index';

export default { title: 'Flexbox' };

export const Default = () => (
    <Flex.Container minWidth="100%" justifyContent="space-around">
        <Flex.Item order={0} style={{ backgroundColor: 'green', width: '300px', height: '100px' }}>
            Flex Item 1
        </Flex.Item>
        <Flex.Item alignSelf="flex-end" style={{ backgroundColor: 'red', width: '300px', height: '100px' }}>
            Flex Item 2
        </Flex.Item>
        <Flex.Item alignSelf="flex-end" style={{ backgroundColor: 'blue', width: '300px', height: '100px' }}>
            Flex Item 3
        </Flex.Item>
        <Flex.Item alignSelf="flex-end" style={{ backgroundColor: 'yellow', width: '300px', height: '100px' }}>
            Flex Item 4
        </Flex.Item>
        <Flex.Item alignSelf="flex-end" style={{ backgroundColor: 'pink', width: '300px', height: '100px' }}>
            Flex Item 5
        </Flex.Item>
    </Flex.Container>
);
