import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Card, CardProps } from '.'
import { Button } from '../Button'
import { Icon } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes

## Properties
| Property                     | Values            |    Status           |
|---                           |                ---|                  ---|
| **elevation**                | true/false        | ✅ Available        |
| **radius**                   | true/false        | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<CardProps>;

export const Playground: Story = {
  render: (args) => {
    const { image, wrapper } = containerStyles()
    const { text } = textStyle()

    return (
      <Card {...args}>
        <div className={image}>
          <Icon name="outlined-product-brandsproduct" size="hugeXXX" />
        </div>
        <div className={wrapper}>
          <p className={text}>
            This is just an example of the Card component
            containing an image, a text and a button
          </p>
          <Button onClick={fn()} fullWidth>button</Button>
        </div>
      </Card>
    )
  }
}

export const Elevation: Story = {
  render: (args) => {
    const { text } = textStyle()

    return (
      <StoryContainer>
        <Card {...args}>
          <p className={text}>
            This is an example of the Card component with elevation
          </p>
        </Card>
        <Card {...args} elevation={false}>
          <p className={text}>
            This is an example of the Card component without elevation
          </p>
        </Card>
      </StoryContainer>
    )
  }
}

export const Radius: Story = {
  render: (args) => {
    const { text } = textStyle()

    return (
      <StoryContainer>
        <Card {...args}>
          <p className={text}>
            This is an example of the Card component with radius
          </p>
        </Card>
        <Card {...args} radius={false}>
          <p className={text}>
            This is an example of the Card component without radius
          </p>
        </Card>
      </StoryContainer>
    )
  }
}

const textStyle = createUseStyles((theme: Theme) => ({
  text: {
    color: theme.color.highEmphasis,
    fontFamily: [theme.typography.fontFamily.primary, theme.typography.fontFamily.secondary],
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0.22,
    maxWidth: 200,
    textAlign: 'center'
  }
}))

const containerStyles = createUseStyles((theme: Theme) => ({
  image: {
    backgroundColor: theme.color.lowEmphasis,
    opacity: 0.4,
    textAlign: 'center'
  },
  wrapper: {
    padding: theme.spacing.small
  }
}))
