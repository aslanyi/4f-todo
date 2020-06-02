import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/utils/theme';
import GlobalStyle from '../src/utils/globalStyle';

const ThemeDecorator = (storyFn) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {storyFn()}
    </ThemeProvider>
);

export default ThemeDecorator;
