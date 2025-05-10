import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagProps } from '.'
import { Icon as IconElement } from '../Icon'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Tags are used to label, categorize, or organize items using keywords that describe them.

## Properties
| Property                      | Values                                                 |    Status           |
|---                            |                                                     ---|                  ---|
| **variant (no prop)**         | Standard                                               | ✅ Available        |
| **position**                  | center, left, right                                    | ✅ Available        |
| **size**                      | small, ,standard                                       | ✅ Available        |
| **color**                     | primary, secondary, success, alert, warning, link,     | ✅ Available        |
| **customBackgroundColor**     | string                                                 | ✅ Available        |
| **customLabelColor**          | string                                                 | ✅ Available        |
| **IconComponent**             | IconComponent                                          | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<TagProps> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<TagProps>;

export const Playground: Story = {
  args: {
    children: 'Design System'
  },
  render: (args) => (
    <Tag {...args} />
  )
}

export const Position: Story = {
  render: () => (
    <StoryContainer>
      <Tag>center</Tag>
      <Tag position="right">right</Tag>
      <Tag position="left">left</Tag>
    </StoryContainer>
  )
}

export const Color: Story = {
  render: () => (
    <StoryContainer>
      <Tag color="primary">primary</Tag>
      <Tag color="secondary">secondary</Tag>
      <Tag color="success">success</Tag>
      <Tag color="alert">alert</Tag>
      <Tag color="warning">warning</Tag>
      <Tag color="link">link</Tag>
      <Tag customBackgroundColor="#FF00FF" customLabelColor="#FFFFFF">custom</Tag>
    </StoryContainer>
  )
}

export const Size: Story = {
  render: () => (
    <StoryContainer>
      <Tag size="small">small</Tag>
      <Tag size="standard">standard</Tag>
    </StoryContainer>
  )
}

export const Icon: Story = {
  render: () => (
    <StoryContainer>
      <Tag
        size="small"
        IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="small" />}
      >
        small
      </Tag>
      <Tag
        size="standard"
        IconComponent={<IconElement name="outlined-default-mockup" color="highEmphasis" size="standard" />}
      >
        standard
      </Tag>
    </StoryContainer>
  )
}
