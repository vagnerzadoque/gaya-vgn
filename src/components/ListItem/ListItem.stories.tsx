import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useTheme } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { ListItem, ListItemProps } from '.'
import { Divider as DividerComponent } from '../Divider'

const componentStatus = `
> Lists are continuous, vertical indexes of content such as text and images.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant (no prop)**     | base                       | ✅ Available        |
| **interaction**           | none, action, selectable   | ✅ Available        |
| **key**                   | string, number             | ✅ Available        |
| **onClick**               | function                   | ✅ Available        |
| **selected**              | true/false                 | ✅ Available        |
| **SeparatorComponent**    | component                  | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<ListItemProps> = {
  title: 'Components/ListItem',
  component: ListItem,
  parameters: {
    componentSubtitle:
      '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<ListItemProps>;

const items = [
  { id: 'luca', title: 'Luca' },
  { id: 'cruella', title: 'Cruella' },
  { id: 'black-widow', title: 'Black Widow' },
  { id: 'mulan', title: 'Mulan' }
]

export const Playground: Story = {
  args: {
    interaction: 'none',
    selected: false
  },
  render: (args) => {
    const theme: Theme = useTheme()

    return (
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map(({ id, title }) => (
          <ListItem {...args} key={id}>
            <span style={{ color: theme.color.onSurface }}>
              {title}
            </span>
          </ListItem>
        ))}
      </ul>
    )
  }
}

export const InteractionAction: Story = {
  args: {
    interaction: 'action',
    onClick: fn(() => console.log('something happened!'))
  },
  render: (args) => {
    const theme: Theme = useTheme()

    return (
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map(({ id, title }) => (
          <ListItem {...args} key={id}>
            <span style={{ color: theme.color.onSurface }}>
              {title}
            </span>
          </ListItem>
        ))}
      </ul>
    )
  }
}

export const InteractionSelectable: Story = {
  args: {
    interaction: 'selectable'
  },
  render: (args) => {
    const [selected, setSelected] = useState('')
    const theme: Theme = useTheme()

    return (
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map(({ id, title }) => (
          <ListItem
            {...args}
            key={id}
            selected={title === selected}
            onClick={() => setSelected(title)}
          >
            <span style={{ color: theme.color.onSurface }}>
              {title}
            </span>
          </ListItem>
        ))}
      </ul>
    )
  }
}

export const Divider: Story = {
  args: {
    interaction: 'none',
    selected: false,
    SeparatorComponent: <DividerComponent />
  },
  render: (args) => {
    const theme: Theme = useTheme()

    return (
      <ul style={{ margin: 0, padding: 0 }}>
        {items.map(({ id, title }) => (
          <ListItem {...args} key={id}>
            <span style={{ color: theme.color.onSurface }}>
              {title}
            </span>
          </ListItem>
        ))}
      </ul>
    )
  }
}
