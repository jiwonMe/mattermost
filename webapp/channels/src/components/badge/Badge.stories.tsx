import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const Badge = ({ count = 3, type = 'default' }: { count?: number; type?: 'default' | 'mention' | 'urgent' }) => {
  const styles: Record<string, React.CSSProperties> = {
    default: { background: '#3d3c40', color: '#fff' },
    mention: { background: '#d24b4e', color: '#fff' },
    urgent: { background: '#d24b4e', color: '#fff' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        padding: '0 6px',
        borderRadius: 9,
        fontSize: 11,
        fontWeight: 700,
        ...styles[type],
      }}
    >
      {count > 99 ? '99+' : count}
    </span>
  );
};

const meta: Meta<typeof Badge> = {
  title: 'Priority1/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'mention', 'urgent'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { count: 5, type: 'default' } };
export const Mention: Story = { args: { count: 12, type: 'mention' } };
export const Many: Story = { args: { count: 150, type: 'urgent' } };
