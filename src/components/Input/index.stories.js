import React from 'react';
import Input from './index';

export default { title: 'Input' };

export const withPlaceholderValid = () => <Input placeholder="saa" isValid />;

export const withIcon = () => <Input icon="account" iconSize="30px" />;

export const withIconAndPlaceholder = () => <Input icon="password" placeholder="Enter your password." iconSize="30px" iconColor="red" />;
