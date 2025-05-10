import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Label, LabelProps } from '.'

const meta: Meta<LabelProps> = {
  title: 'Utilities/Label',
  component: Label,
  parameters: {
    previewTabs: {
      canvas: { hidden: true }
    }
  }
};

export default meta;
type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    label: 'label'
  },
  render: (args) => <Label {...args} />
}
