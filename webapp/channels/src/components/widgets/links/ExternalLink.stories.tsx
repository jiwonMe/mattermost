import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import ExternalLink from './external_link';

const meta: Meta<typeof ExternalLink> = {
    title: 'Widgets/ExternalLink',
    component: ExternalLink,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
    args: {
        href: 'https://mattermost.com',
        children: 'Mattermost Website',
    },
};
