import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import LoadingSpinner from './loading_spinner';

const meta: Meta<typeof LoadingSpinner> = {
    title: 'Widgets/LoadingSpinner',
    component: LoadingSpinner,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};

export const Small: Story = {
    args: {
        size: 'small',
    },
};
