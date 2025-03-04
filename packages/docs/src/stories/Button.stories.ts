import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, IButtonProps } from '@lume-ui/ui';

const meta: Meta<IButtonProps> = {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
    variant: 'primary',
    onClick: fn()
  },
};


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary Button' },
}
