import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';

import TeamIcon from './team_icon';

const meta: Meta<typeof TeamIcon> = {
    title: 'Widgets/TeamIcon',
    component: TeamIcon,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TeamIcon>;

export const Default: Story = {
    args: {
        name: 'Mattermost',
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        name: 'Team',
        size: 'sm',
    },
};
