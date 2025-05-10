import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

// update logo CB1

const componentStatus = `
> Logo adapted as brand standards for each company

## Properties
| Property                      | Values                                            |    Status           |
|---                            |                                                ---|                  ---|
| **variant (no prop)**         | standard                                          | ✅ Available        |
| **arialabel**                 | string                                            | ✅ Available        |
| **color**                     | neutral, primary, secondary, highlight, surface   | ✅ Available        |
| **model**                     | a, b                                              | ✅ Available        |
| **languages**                 | default, pt, es                                   | ✅ Available        |
| **mode**                      | light, dark                                       | ✅ Available        |
| **size**                      | medium, mediumX, large, largeX, largeXX, <br /> largeXXX, huge, hugeX, hugeXX, hugeXXX, veryHuge  | ✅ Available     |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo              | ✅ Available      |

## Technical Usages Examples
`

const meta: Meta<LogoProps> = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    componentSubtitle: 'Logo adapted as brand standards for each company',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
}

export default meta
type Story = StoryObj<LogoProps>

export const Playground: Story = {
  render: (args) => <Logo {...args} />
}

export const Size: Story = {
  render: (args) => (
    <StoryContainer>
      <Logo {...args} size="medium" />
      <Logo {...args} size="mediumX" />
      <Logo {...args} size="large" />
      <Logo {...args} size="largeX" />
      <Logo {...args} size="largeXX" />
      <Logo {...args} size="largeXXX" />
      <Logo {...args} size="huge" />
      <Logo {...args} size="hugeX" />
      <Logo {...args} size="hugeXX" />
      <Logo {...args} size="hugeXXX" />
      <Logo {...args} size="veryHuge" />
    </StoryContainer>
  )
}

export const Color: Story = {
  render: (args: LogoProps) => (
    <StoryContainer>
      <Logo {...args} />
      <Logo {...args} color="primary" />
      <Logo {...args} color="secondary" />
      <Logo {...args} color="highlight" />
      <Logo {...args} color="surface" />
    </StoryContainer>
  )
};

export const Model: Story = {
  args: {
    model: 'a'
  },
  render: (args: LogoProps) => (
    <StoryContainer>
      <Logo {...args} />
    </StoryContainer>
  )
};
