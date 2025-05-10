import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Checkbox, CheckboxProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Checkboxes allow users to select one or more items from a set.

## Properties
| Property                    | Values            |    Status           |
|---                          |                ---|                  ---|
| **disabled**                | true/false        | ✅ Available        |
| **indeterminate**           | true/false        | ✅ Available        |
| **checked**                 | true/false        | ✅ Available        |
| **value**                   | string            | ✅ Available        |
| **onChange**                | function          | ✅ Available        |
| **label**                   | string            | ✅ Available        |
| **id**                      | string            | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const Playground: Story = {
  args: {
    checked: false,
    label: 'Example'
  },
  render: ({ checked, ...args }) => {
    const [check, setCheck] = useState(checked)

    return (
      <Checkbox {...args} checked={check} onChange={() => setCheck(!check)} />
    )
  }
}

export const Variants: Story = {
  args: {
    label: 'Example'
  },
  render: (args) => {
    const [check1, setCheck1] = useState(true)
    const [check2, setCheck2] = useState(true)

    return (
      <StoryContainer>
        <Checkbox {...args} checked={check1} onChange={() => setCheck1(!check1)} />
        <Checkbox {...args} checked={check2} onChange={() => setCheck2(!check2)} indeterminate />
      </StoryContainer>
    )
  }
}

export const Disabled: Story = {
  args: {
    label: 'Example',
    disabled: true
  },
  render: (args) => (
    <StoryContainer>
      <Checkbox {...args} />
      <Checkbox {...args} checked />
      <Checkbox {...args} checked indeterminate />
    </StoryContainer>
  )
}
