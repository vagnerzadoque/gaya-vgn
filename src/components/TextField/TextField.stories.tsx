/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { TextField, TextFieldProps } from '.'
import { Label } from '../Label'
import { Input, InputHelperText } from '../Input'
import StoryContainer from '../../helpers/StoryContainer'
import { Icon } from '../Icon'

const componentStatus = `
> Text fields let users enter and edit text

## Properties
| Property                      | Values                                                 |    Status           |
|---                            |                                                     ---|                  ---|
| **variant (no prop)**         | Standard                                               | ✅ Available        |
| **disabled**                  | true/false                                             | ✅ Available        |
| **feedback**                  | success, error                                         | ✅ Available        |
| **id**                        | string                                                 | ✅ Available        |
| **helperText**                | string                                                 | ✅ Available        |
| **label**                     | string                                                 | ✅ Available        |
| **minRows**                   | number                                                 | ✅ Available        |
| **onBlur**                    | function                                               | ✅ Available        |
| **onClick**                   | function                                               | ✅ Available        |
| **onChange**                  | function                                               | ✅ Available        |
| **onFocus**                   | function                                               | ✅ Available        |
| **onKeyDown**                 | function                                               | ✅ Available        |
| **onKeyUp**                   | function                                               | ✅ Available        |
| **placeholder**               | string                                                 | ✅ Available        |
| **required**                  | true/false                                             | ✅ Available        |
| **readOnly**                  | true/false                                             | ✅ Available        |
| **isResizable**               | true/false                                             | ✅ Available        |
| **size**                      | medium, mediumX                                        | ✅ Available        |
| **type**                      | text, password, multiline                              | ✅ Available        |
| **value**                     | string                                                 | ✅ Available        |
| **iconLeading**               | component Icon                                         | ✅ Available        |
| **action**                    | icon, image                                            | ✅ Available        |
| **ariaLabel**                 | string                                                 | ✅ Available        |
| **alt**                       | string                                                 | ✅ Available        |
| **src**                       | string                                                 | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  subcomponents: { Label, InputHelperText, Input },
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Playground: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder'
  },
  render: (args) => {
    const [value, setValue] = useState<string>('')
    const handleKey = (event: React.KeyboardEvent) => {
      if (event.code === 'Enter') {
        // eslint-disable-next-line no-console
        console.log(event.code)
        // eslint-disable-next-line no-alert
        alert(event.key)
      }
    }

    return (
      <StoryContainer>
        <TextField
          {...args}
          onKeyDown={handleKey}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </StoryContainer>
    )
  }
}

export const Size: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
      <TextField {...args} size="medium" />
    </StoryContainer>
  )
}

export const HelperText: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} helperText="Helper text" />
    </StoryContainer>
  )
}

export const Feedback: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} feedback="error" />
      <TextField {...args} feedback="success" />
    </StoryContainer>
  )
}

export const ReadOnly: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    readOnly: true,
    value: 'Hello World'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}

export const Required: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    required: true
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}

export const Disabled: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
    value: 'Hello World'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}

export const DisabledWithIconLeading: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
    value: 'Hello World'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} iconLeading={<Icon name="filled-action-love" color={args.disabled ? 'lowEmphasis' : 'highEmphasis'} />} />
    </StoryContainer>
  )
}

export const Type: Story = {
  args: {
    helperText: 'Helper text',
    placeholder: 'Placeholder'
  },
  render: (args) => {
    const [password, setPassword] = useState<string>('Hello World')
    const [passwordTrans, setPasswordTrans] = useState<boolean>(false)
    const [text, setText] = useState<string>('Hello World')
    const [textArea, setTextArea] = useState<string>('Hello World')

    return (
      <StoryContainer>
        <TextField
          {...args}
          ariaLabel="Pass"
          onClick={() => setPasswordTrans(!passwordTrans)}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={`${passwordTrans ? 'text' : 'password'}`}
          label="Password type"
          action="icon"
          IconComponent={<Icon name="outlined-action-visibility" color="highEmphasis" />}
        />
        <TextField {...args} onChange={(e) => { setText(e.target.value) }} value={text} label="Text type" />
        <TextField {...args} onChange={(e) => setTextArea(e.target.value)} value={textArea} type="multiline" label="Multiline type" />
      </StoryContainer>
    )
  }
}

export const ActionIcon: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    action: 'icon',
    IconComponent: <Icon name="filled-action-love" color="highEmphasis" />,
    onClick: fn(),
    ariaLabel: 'heart icon button'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}

export const ActionImage: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    action: 'image',
    src: '/img_placeholder.png',
    alt: 'image placeholder example'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}
export const IconLeading: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    action: 'image',
    iconLeading: <Icon name="filled-action-love" color="highEmphasis" />,
    src: '/img_placeholder.png',
    alt: 'image placeholder example'
  },
  render: (args) => (
    <StoryContainer>
      <TextField {...args} />
    </StoryContainer>
  )
}

export const Acessibility: Story = {
  args: {
    helperText: 'Helper text',
    label: 'Label',
    placeholder: 'Placeholder',
    action: 'icon',
    IconComponent: <Icon name="filled-action-love" color="highEmphasis" />,
    onClick: fn(),
    ariaLabel: 'heart icon button'
  },
  render: (args) => (
    <StoryContainer>
      <TextField
        {...args}
        accessibility={{
          'aria-label': 'Gaya aria-label',
          'aria-labelledby': 'Gaya aria-labelledby',
          'aria-describedby': 'Gaya aria-describedby',
          'aria-required': true,
          'aria-invalid': false,
          'aria-disabled': false,
          'aria-autocomplete': 'inline',
          'aria-activedescendant': 'Gaya aria-activedescendant',
          tabIndex: 1
        }}
      />
    </StoryContainer>
  )
}
