import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Example simple button component for demonstration
// Replace with actual Mattermost Button component later
const Button = ({ label, onClick, primary = false }: { label: string; onClick?: () => void; primary?: boolean }) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: primary ? '#0058cc' : '#fff',
      color: primary ? '#fff' : '#000',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    {label}
  </button>
);

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    primary: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
  },
};
