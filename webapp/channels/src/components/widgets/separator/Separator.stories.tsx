import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import Separator from './separator';

const meta: Meta<typeof Separator> = {
    title: 'Widgets/Separator',
    component: Separator,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
    args: {
        orientation: 'horizontal',
    },
};

export const Vertical: Story = {
    args: {
        orientation: 'vertical',
        style: {height: '100px'},
    },
};
