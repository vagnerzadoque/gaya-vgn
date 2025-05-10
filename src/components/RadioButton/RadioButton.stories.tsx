import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { RadioButton, RadioButtonProps } from '.'

const componentStatus = `
> RadioButton allow users to select one option from a set.

## Properties
| Property                      | Values                           |    Status           |
|---                            |                               ---|                  ---|
| **variant(no prop)**          | Standard                         | ✅ Available        |
| **disabled**                  | true/false                       | ✅ Available        |
| **id**                        | string                           | ✅ Available        |
| **label**                     | string                           | ✅ Available        |
| **name**                      | string                           | ✅ Available        |
| **onBlur**                    | function                         | ✅ Available        |
| **onChange**                  | function                         | ✅ Available        |
| **onFocus**                   | function                         | ✅ Available        |
| **required**                  | true/false                       | ✅ Available        |
| **value**                     | string                           | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<RadioButtonProps> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<RadioButtonProps>;

export const Playground: Story = {
  args: {
    checked: false,
    label: 'Example'
  },
  render: ({ checked, ...args }) => {
    const [check, setCheck] = useState(checked)

    return (
      <RadioButton {...args} checked={check} onChange={() => setCheck(!check)} />
    )
  }
}

export const Disabled: Story = {
  args: {
    label: 'Example',
    disabled: true
  },
  render: (args) => (
    <>
      <RadioButton {...args} />
      <RadioButton {...args} checked />
    </>
  )
}
