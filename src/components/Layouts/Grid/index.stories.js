import React from 'react';
import Grid from './index';

export default { title: 'Grid' };

export const Default = () => (
    <Grid.Container gridTemplateColumns="repeat(5,1fr)" gridAutoRows="150px">
        <Grid.Item gridColumn="1/6" gridRow="1" backgroundColor="red" textAlign="center">
            Hello
        </Grid.Item>
        <Grid.Item gridColumn="5 " gridRow="2/5" backgroundColor="blue" textAlign="center">
            Grid Item 2
        </Grid.Item>
        <Grid.Item gridColumn="1" gridRow="2/5" backgroundColor="green" textAlign="center">
            Grid Item 3
        </Grid.Item>
        <Grid.Item gridColumn="2/5" gridRow="2/5" backgroundColor="orange" textAlign="center">
            Grid Item 4
        </Grid.Item>
        <Grid.Item gridColumn="1/6" gridRow="5" backgroundColor="pink" textAlign="center">
            Grid Item 6
        </Grid.Item>
    </Grid.Container>
);
