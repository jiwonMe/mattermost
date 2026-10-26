import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import Tag from './tag';

const meta: Meta<typeof Tag> = {
    title: 'Widgets/Tag',
    component: Tag,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        text: 'Example Tag',
    },
};

export const WithIcon: Story = {
    args: {
        text: 'Tagged',
        icon: 'check',
    },
};
