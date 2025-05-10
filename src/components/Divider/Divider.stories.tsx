import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Divider, DividerProps } from '.'

const componentStatus = `
> A divider is a thin line that groups content in lists and layouts.

## Properties
| Property             | Values                       |    Status           |
|---                   |                           ---|                  ---|
| **variant**          | full-bleed, inset, middle    | ✅ Available        |
## Technical Usages Examples
`

const Template: React.FC = ({ children }) => (
  <div style={{ maxWidth: 200, border: '1px solid #00000014', padding: '16px 0' }}>
    {children}
  </div>
)

const meta: Meta<DividerProps> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<DividerProps>;

export const Playground: Story = {
  render: (args) => (
    <Template>
      <Divider {...args} />
    </Template>
  )
};

export const FullBleed: Story = {
  args: {
    variant: 'full-bleed'
  },
  render: (args) => (
    <Template>
      <Divider {...args} />
    </Template>
  )
};

export const Inset: Story = {
  args: {
    variant: 'inset'
  },
  render: (args) => (
    <Template>
      <Divider {...args} />
    </Template>
  )
};

export const Middle: Story = {
  args: {
    variant: 'middle'
  },
  render: (args) => (
    <Template>
      <Divider {...args} />
    </Template>
  )
};
