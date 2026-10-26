import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import AlertBanner from './index';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Info: Story = {
  args: {
    mode: 'info',
    title: 'Information',
    message: 'This is an informational banner.',
  },
};

export const Success: Story = {
  args: {
    mode: 'success',
    title: 'Success',
    message: 'Operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    mode: 'warning',
    title: 'Warning',
    message: 'Please review the following warning.',
  },
};

export const Danger: Story = {
  args: {
    mode: 'danger',
    title: 'Error',
    message: 'An error has occurred.',
  },
};
