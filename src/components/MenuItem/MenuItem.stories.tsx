import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Icon from '../Icon'
import { MenuItem, MenuItemProps } from '.'
import Badge from '../Badge'

const componentStatus = `
> MenuItem represents a menu item in a user interface, used in conjunction with menus and lists.

## Properties
| Property                      | Values                                                    |    Status           |
|---                            |                                                        ---|                  ---|
| **variant (no prop)**         | standard                                                  | ✅ Available        |
| **onClick**                   | function                                                  | ✅ Available        |
| **disabled**                  | true/false                                                | ✅ Available        |
| **selected**                  | true/false                                                | ✅ Available        |
| **activated**                 | true/false                                                | ✅ Available        |
| **type**                      | submenu, title, regular                                   | ✅ Available        |
| **href**                      | href                                                      | ✅ Available        |
| **hrefLang**                  | hrefLang                                                  | ✅ Available        |
| **add**                       | (available but with alternative composition)              | ✅ Available        |
| **Action**                    | left, right (available but with alternative composition)  | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<MenuItemProps> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<MenuItemProps>;

export const Playground: Story = {
  args: {
    children:
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          Menu Item
          <Badge variant="standard" color="alert" value={100} limit={99} />
        </div>
      </div>
      <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}

export const Submenu: Story = {
  args: {
    type: 'submenu',
    children:
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          Menu Item
          <Badge variant="standard" color="alert" value={100} limit={99} />
        </div>
      </div>
      <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}

export const Title: Story = {
  args: {
    type: 'title',
    children:
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          Menu Item
          <Badge variant="standard" color="alert" value={100} limit={99} />
        </div>
      </div>
      <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}

export const Activated: Story = {
  args: {
    activated: true,
    children:
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          Menu Item
          <Badge variant="standard" color="alert" value={100} limit={99} />
        </div>
      </div>
      <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}

export const Selected: Story = {
  args: {
    selected: true,
    children:
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          Menu Item
          <Badge variant="standard" color="alert" value={100} limit={99} />
        </div>
      </div>
      <Icon name="outlined-default-mockup" size="standard" color="highEmphasis" />
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children:
    <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
      <Icon name="outlined-default-mockup" size="standard" color="lowEmphasis" />
      <div>Menu Item</div>
    </div>
  },
  render: (args) => (
    <ul style={{ padding: 0, margin: 0 }}>
      <MenuItem {...args} />
    </ul>
  )
}
