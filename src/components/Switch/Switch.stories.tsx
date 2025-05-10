import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Switch, SwitchProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'

const componentStatus = `
> Switches allow users to enable or disable an option.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant (no prop)**         | Standard                                      | ✅ Available        |
| **checked**                   | true/false                                    | ✅ Available        |
| **value**                     | string                                        | ✅ Available        |
| **id**                        | string                                        | ✅ Available        |
| **onChange**                  | function                                      | ✅ Available        |
| **disabled**                  | true/false                                    | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Playground: Story = {
  render: ({ checked, ...args }) => {
    const [check, setCheck] = useState(checked)

    return <Switch {...args} checked={check} onChange={() => setCheck(!check)} />
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => (
    <StoryContainer>
      <Switch {...args} checked={false} id="firstSwitch" />
      <Switch {...args} checked id="secondSwitch" />
    </StoryContainer>
  )
}
