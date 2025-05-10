import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from '.'

const meta: Meta<InputProps> = {
  title: 'Utilities/Input',
  component: Input,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
};

export default meta;
type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {},
  render: (args) => <Input {...args} />
};
