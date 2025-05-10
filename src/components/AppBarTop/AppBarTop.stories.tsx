/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TextField from '../TextField'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'
import { AppBarTop, AppBarProps } from '.'
import { Logo } from '../Logo'

const componentStatus = `
> The App Bar Top displays information and actions relating to the current screen.

## Properties
| Property                      | Values                                 |    Status           |
|---                            |                                     ---|                  ---|
| **variant(no prop)**                   | base/standard                 | ✅ Available        |
| **color**                     | default, primary, inverse, none        | ✅ Available        |
| **elevation**                 | true/false                             | ✅ Available        |
| **behaviour**                 | fixed, scroll, absolute                | ✅ Available        |
| **action**                    | left, right                            | ✅ (available but with alternative composition)        |
| **Content Position**          | (available but with alternative composition) | ✅ (available but with alternative composition)        |
| **Content Type**              | (available but with alternative composition) | ✅ (available but with alternative composition)        |
| **Content Proeminent**        | (available but with alternative composition) | ✅ (available but with alternative composition)        |


## Technical Usages Examples
`

const meta: Meta<AppBarProps> = {
  title: 'Components/AppBarTop',
  component: AppBarTop,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<AppBarProps>;

export const Playground: Story = {
  args: {
    children: 'App Bar - Top',
    behaviour: 'absolute'
  },
  render: (args: AppBarProps) => (
    <div style={{
      display: 'flex',
      position: 'relative',
      gap: 8,
      flexDirection: 'column',
      minHeight: 920,
      width: '100%',
      // border: '1px solid red',
      overflowY: 'scroll'
    }}
    >
      <AppBarTop {...args} />
    </div>
  )
}

export const Color: Story = {
  args: {
    children: 'App Bar - Top',
    style: { position: 'static' } as React.CSSProperties
  },
  render: (args: AppBarProps) => (
    <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
      <AppBarTop {...args} color="default">Default</AppBarTop>
      <AppBarTop {...args} color="primary">Primary</AppBarTop>
      <AppBarTop {...args} color="secondary">Secondary</AppBarTop>
      <AppBarTop {...args} color="inverse">Inverse</AppBarTop>
      <AppBarTop {...args} color="none">None</AppBarTop>
    </div>
  )
}

export const Elevation: Story = {
  args: {
    children: 'App Bar - Top',
    style: { position: 'static' } as React.CSSProperties
  },
  render: (args: AppBarProps) => (
    <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
      <AppBarTop {...args}>Elevation</AppBarTop>
      <AppBarTop {...args} elevation={false}>No Elevation</AppBarTop>
    </div>
  )
}

export const WithLogo: Story = {
  args: {
    style: { position: 'static' } as React.CSSProperties
  },
  render: (args: AppBarProps) => (
    <AppBarTop {...args}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={fn()} />
        <div style={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
          <Logo size="hugeX" />
        </div>
        <>
          <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={fn()} />
          <IconButton IconComponent={<Icon name="outlined-finance-bag" color="highlight" />} ariaLabel="profile" onClick={fn()} />
        </>
      </div>
    </AppBarTop>
  )
}
export const WithSearch: Story = {
  args: {
    style: { position: 'static' } as React.CSSProperties
  },
  render: (args: AppBarProps) => (
    <AppBarTop {...args}>
      <>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <IconButton IconComponent={<Icon name="outlined-navigation-menu" color="highlight" />} ariaLabel="menu" onClick={fn()} />
        </div>
        <div style={{ justifyContent: 'center', display: 'flex' }}>
          <TextField
            ariaLabel="search"
            onClick={fn()}
            id="123"
            size="medium"
            placeholder="Search"
            action="icon"
            IconComponent={<IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={fn()} />}
          />
        </div>
        <div>
          <IconButton IconComponent={<Icon name="outlined-action-search" color="highlight" />} ariaLabel="search" onClick={fn()} />
          <IconButton IconComponent={<Icon name="outlined-finance-bag" color="highlight" />} ariaLabel="profile" onClick={fn()} />
        </div>
      </>
    </AppBarTop>
  )
}
