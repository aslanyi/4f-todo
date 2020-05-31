import React from "react"
import { ThemeProvider } from 'styled-components';
import Theme from '../src/utils/theme';

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={Theme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator;