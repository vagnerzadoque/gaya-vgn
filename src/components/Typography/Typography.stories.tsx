import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography, TypographyProps } from '.'

const componentStatus = `
> used to control and display text styles consistently across an application

## Properties
| Property                      | Values                                                 |    Status           |
|---                            |                                                     ---|                  ---|
| **variant**         | heading1, heading2, heading3, heading4, heading5, <br /> heading6, subtitle1, subtitle2, body1, body2, caption, overline  | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Playground: Story = {
  args: {
    children: "Hello world"
  },
  render: (args) => <Typography {...args} />
};
