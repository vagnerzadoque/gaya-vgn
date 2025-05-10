import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useTheme } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Autocomplete, AutocompleteProps } from '.'
import { OptionProps } from './Autocomplete.props'

const componentStatus = `
> Autocomplete offers an interactive text box that suggests options as the user types

## Properties
| Property                      | Values                                 |    Status           |
|---                            |                                     ---|                  ---|
| **variant**                   | standard                               | ✅ Available        |
| **label**                     | string                                 | ✅ Available        |
| **name**                      | string                                 | ✅ Available        |
| **placeholder**               | string                                 | ✅ Available        |
| **options**                   | [{value: string, label: string}]       | ✅ Available        |
| **size**                      | medium, mediumX                        | ✅ Available        |
| **helperText**                | string                                 | ✅ Available        |
| **feedback**                  | success, error                         | ✅ Available        |
| **required**                  | true/false                             | ✅ Available        |
| **disabled**                  | true/false                             | ✅ Available        |
| **readonly**                  | true/false                             | ✅ Available        |
| **Position**                  | bottom, top                            | ✅ Available        |
| **handleSelect**              | function                               | ✅ Available        |
| **notFound**                  | string                                 | ✅ Available        |
| **onChange**                  | function                               | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |



## Technical Usages Examples
`

const options: OptionProps[] = [{
  value: '1',
  label: 'Kaiak Masculino'
},
{
  value: '2',
  label: 'Kaiak Aventura'
},
{
  value: '3',
  label: 'Natura Homem'
},
{
  value: '4',
  label: 'Humor a Dois'
},
{
  value: '5',
  label: 'Una Artisan Deo Parfum'
},
{
  value: '6',
  label: 'Essencial Deo Parfum'
}
]

const meta: Meta<AutocompleteProps> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  },
  argTypes: {
    feedback: {
      options: ['success', 'error', undefined],
      controls: {
        type: 'radio'
      }
    }
  }
};

export default meta;
type Story = StoryObj<AutocompleteProps>;

export const Playground: Story = {
  args: {
    placeholder: ' Placeholder ',
    label: 'Label',
    notFound: 'Item não encontrado',
    helperText: '',
    feedback: undefined,
    required: false,
    readonly: false,
    position: 'top'
  },
  render: (args) => {
    const theme: Theme = useTheme()
    const [value, setValue] = useState<string | undefined>(options[0].label)
    const [filterOptions, setFilterOptions] = useState<OptionProps[]>(options)

    const handleSelect = (values: OptionProps) => {
      setValue(values.label)
      // handleChange(value)
    }

    const handleChange = (values: string) => {
      setValue(values)
      const newFilter = options.filter(
        (opt) => opt.label.toLowerCase().includes(values.toLowerCase())
      )
      if (newFilter.length > 0) {
        setFilterOptions(newFilter)
      } else {
        setFilterOptions([{ value: 'false', label: 'false' }])
      }
    }
    return (
      <div style={{
        height: '500px',
        // border: '1px solid yellow',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: theme.color.highEmphasis
      }}
      >

        <Autocomplete
          {...args}
          onChange={(e) => handleChange(e.target.value)}
          options={filterOptions}
          value={value}
          handleSelect={handleSelect}
        />
      </div>
    )
  }
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label'
  },
  render: (args) => <Autocomplete {...args} />
};

export const WithHelperText: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    helperText: "Helper Text"
  },
  render: (args) => <Autocomplete {...args} />
};

export const HasSuccess: Story = {
  args: {
    placeholder: "Placeholder",
    feedback: "success",
    label: "Label",
    helperText: "Helper Text"
  },
  render: (args) => <Autocomplete {...args} />
};

export const Brand: Story = {
  args: {
    brand: "avon_v2",
    placeholder: "Placeholder",
    label: "Label"
  },
  render: (args) => <Autocomplete {...args} />
};

export const HasError: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    helperText: "Helper Text",
    feedback: 'error'
  },
  render: (args) => <Autocomplete {...args} />
};

export const Required: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    required: true
  },
  render: (args) => <Autocomplete {...args} />
};

export const ReadOnly: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    readonly: true
  },
  render: (args) => <Autocomplete {...args} />
};

export const Disabled: Story = {
  args: {
    placeholder: "Placeholder",
    label: "Label",
    disabled: true
  },
  render: (args) => <Autocomplete {...args} />
};
