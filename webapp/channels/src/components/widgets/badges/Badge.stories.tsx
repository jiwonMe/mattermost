import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import Badge from './badge';

const meta: Meta<typeof Badge> = {
    title: 'Widgets/Badge',
    component: Badge,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        children: 'New',
    },
};

export const WithCount: Story = {
    args: {
        children: '3',
        show: true,
    },
};
