import React from 'react';
import Input from './index';

export default { title: 'Input' };

export const withPlaceholder = () => <Input placeholder="saa" />;

export const withIcon = () => <Input icon="home" />;

export const withIconAndPlaceholder = () => <Input icon="home" placeholder="Welcome..." />;
