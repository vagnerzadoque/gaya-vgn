import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertProps } from '.'

const componentStatus = `
> Alert allows you to display notification or warning messages on the user interface

## Properties
| Property                      | Values                                 |    Status           |
|---                            |                                     ---|                  ---|
| **variant**                   | standard                               | ✅ Available        |
| **type**                      | contained, outlined                    | ✅ Available        |
| **color**                     | info, success, error, warning, custom  | ✅ Available        |
| **title**                     | string                                 | ✅ Available        |
| **customIcon**                | icon-name                              | ✅ Available        |
| **showIcon**                  | true/false                             | ✅ Available        |
| **customBackgroundColor**     | string                                 | ✅ Available        |
| **customTextColor**           | string                                 | ✅ Available        |
| **customIconColor**           | string                                 | ✅ Available        |
| **customBorderColor**         | string                                 | ✅ Available        |


## Technical Usages Examples

`

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<AlertProps>;

export const Playground: Story = {
  args: {
    title: "Title",
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args) => <Alert {...args} />
};

export const WithoutIcon: Story = {
  args: {
    title: "Title",
    showIcon: false,
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args) => <Alert {...args} />
};

export const WithoutTitle: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args) => <Alert {...args} />
};

export const Custom: Story = {
  args: {
    customIcon: "outlined-default-mockup",
    type: "outlined",
    color: "custom",
    customBackgroundColor: "#FF00FF",
    customBorderColor: "#FF00FF",
    customIconColor: "#FF00FF",
    customTextColor: "#FF00FF",
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args) => <Alert {...args} />
};
