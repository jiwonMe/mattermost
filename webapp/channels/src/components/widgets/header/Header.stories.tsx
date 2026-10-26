import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import Header from './header';

const meta: Meta<typeof Header> = {
    title: 'Widgets/Header',
    component: Header,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        level: 2,
        children: 'Section Header',
    },
};
