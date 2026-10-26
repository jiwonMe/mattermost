import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Tooltip = ({ text = 'This is a tooltip', children }: { text?: string; children?: React.ReactNode }) => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    {children || <button style={{ padding: '8px 16px' }}>Hover me</button>}
    <div
      style={{
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: 8,
        padding: '6px 10px',
        background: '#1b1d22',
        color: '#fff',
        fontSize: 12,
        borderRadius: 4,
        whiteSpace: 'nowrap',
        opacity: 1,
      }}
    >
      {text}
    </div>
  </div>
);

const meta: Meta<typeof Tooltip> = {
  title: 'Priority1/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: 'Helpful information',
    children: <span style={{ textDecoration: 'underline', cursor: 'help' }}>Hover here</span>,
  },
};

export const OnButton: Story = {
  args: {
    text: 'Click to send',
    children: <button style={{ padding: '8px 16px', background: '#1c58d9', color: '#fff', border: 'none', borderRadius: 4 }}>Send</button>,
  },
};
