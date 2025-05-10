import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Select, SelectProps, OptionProps } from '.'

const componentStatus = `
> Allow users to choose an option from a predefined list.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant (no prop)**         | Standard                                      | ✅ Available        |
| **label**                     | string                                        | ✅ Available        |
| **name**                      | string                                        | ✅ Available        |
| **placeholder**               | string                                        | ✅ Available        |
| **options**                   | [{value: string, label: string}]              | ✅ Available        |
| **size**                      | medium, mediumX                               | ✅ Available        |
| **value**                     | string                                        | ✅ Available        |
| **helperText**                | string                                        | ✅ Available        |
| **feedback**                  | success, error                                | ✅ Available        |
| **required**                  | true/false                                    | ✅ Available        |
| **disabled**                  | true/false                                    | ✅ Available        |
| **onChange**                  | function                                      | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<SelectProps>;

const options: OptionProps[] = [{
  value: '1',
  label: 'Option 1'
},
{
  value: '2',
  label: 'Option 2'
}]

export const Playground: Story = {
  render: (args) => (
    <Select {...args} label="Label" options={options} />
  )
}

export const WithPlaceholder: Story = {
  render: (args) => (
    <Select {...args} label="Label" placeholder="Placeholder" options={options} helperText="Helper Text" />
  )
}

export const WithHelperText: Story = {
  render: (args) => (
    <Select {...args} label="Label" options={options} helperText="Helper Text" />
  )
}

export const HasError: Story = {
  args: {
    feedback: "error"
  },
  render: (args) => (
    <Select {...args} label="Label" options={options} helperText="Helper Text" />
  )
}

export const HasSuccess: Story = {
  args: {
    feedback: "success"
  },
  render: (args) => (
    <Select {...args} label="Label" options={options} helperText="Helper Text" />
  )
}

export const Required: Story = {
  args: {
    required: true
  },
  render: (args) => (
    <Select {...args} label="Label" options={options} />
  )
}

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => (
    <Select {...args} label="Label" options={options} />
  )
}

export const Accessibility: Story = {
  args: {
    accessibility: {
      'aria-label': 'Gaya Area-Label',
      'aria-labelledby': 'Gaya Area-labeldby',
      'aria-describedby': 'Gaya Area-Describedy',
      'aria-disabled': false,
      'aria-required': false,
      'aria-invalid': false,
      role: 'Select',
      tabIndex: 1
    }
  },
  render: (args) => (
    <Select
      {...args}
      label="Label"
      options={options}
    />
  )
}
