import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Chip, ChipProps } from '.'

const componentStatus = `
> Chip used to display discrete tags or selections in user interfaces..

## Properties
| Property                    | Values                                      |    Status           |
|---                          |                                          ---|                  ---|
| **variant(no prop)**        | Standard                                    | ✅ Available        |
| **labelText**               | string                                      | ✅ Available        |
| **leftIcon**                | icon-name                                   | ✅ Available        |
| **rightIcon**               | icon-name                                   | ✅ Available        |
| **leftAvatar**              | string                                      | ✅ Available        |
| **rightAvatar**             | string                                      | ✅ Available        |
| **color**                   | neutral, primary, secondary, custom         | ✅ Available        |
| **disabled**                | true/false                                  | ✅ Available        |
| **selected**                | true/false                                  | ✅ Available        |
| **customLabelColor**        | string                                      | ✅ Available        |
| **customBackground**        | string                                      | ✅ Available        |
| **customBorderColor**       | string                                      | ✅ Available        |
| **size**                    | semi, semiX, medium                         | ✅ Available        |
| **onClick**                 | function                                    | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<ChipProps> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<ChipProps>;

export const Playground: Story = {
  args: {
    labelText: "Chip label",
    onClick: fn(() => console.log('clicked!'))
  },
  render: (args) => <Chip {...args} />
};

export const WithIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip {...args} labelText="Chip label" leftIcon="outlined-default-mockup" />
      <Chip {...args} labelText="Chip label" rightIcon="outlined-default-mockup" />
      <Chip
        {...args}
        labelText="Chip label"
        leftIcon="outlined-default-mockup"
        rightIcon="outlined-default-mockup"
      />
    </div>
  )
};

export const WithAvatar: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip {...args} labelText="Chip label" leftAvatar="https://via.placeholder.com/200x200" />
      <Chip {...args} labelText="Chip label" rightAvatar="https://via.placeholder.com/200x200" />
      <Chip
        {...args}
        labelText="Chip label"
        leftAvatar="https://via.placeholder.com/200x200"
        rightAvatar="https://via.placeholder.com/200x200"
      />
    </div>
  )
};

export const Disabled: Story = {
  args: {
    labelText: "Chip label",
    disabled: true
  },
  render: (args) => <Chip {...args} />
};

export const Selected: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip {...args} labelText="Neutral" color="neutral" selected />
      <Chip {...args} labelText="Primary" color="primary" selected />
      <Chip {...args} labelText="Secondary" color="secondary" selected />
      <Chip
        {...args}
        labelText="Custom"
        color="custom"
        customBackground="#FF00FF"
        customBorderColor="#FF00FF"
        customLabelColor="#fff"
        selected
      />
    </div>
  )
};

export const Custom: Story = {
  args: {
    labelText: "Chip label",
    color: "custom",
    customBackground: "#FF00FF",
    customBorderColor: "#FF00FF"
  },
  render: (args) => <Chip {...args} />
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip {...args} labelText="Chip label" size="semi" />
      <Chip {...args} labelText="Chip label" size="semiX" />
      <Chip {...args} labelText="Chip label" size="medium" />
    </div>
  )
};

export const Brand: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip brand="avon_v2" {...args} labelText="Chip label" size="semi" />
      <Chip brand="natura_v2" {...args} labelText="Chip label" size="semiX" />
      <Chip brand="casaEestilo" color="custom" {...args} labelText="Chip label" size="medium" />
    </div>
  )
};
