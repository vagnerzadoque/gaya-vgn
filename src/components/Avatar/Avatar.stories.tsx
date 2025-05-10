/* eslint-disable no-param-reassign */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '.'

const componentStatus = `
> Avatar are used to identify a user

## Properties
| Property                      | Values                                    |    Status           |
|---                            |                                        ---|                  ---|
| **variant**                   | standard                                  | ✅ Available        |
| **type**                      | icon, label, image                        | ✅ Available        |
| **size**                      | standard, semi, semiX, medium, largeXXX   | ✅ Available        |
| **alt**                       | string                                    | ✅ Available        |
| **src**                       | string                                    | ✅ Available        |
| **onError**                   | function                                  | ✅ Available        |
| **name**                      | icon-name                                 | ✅ Available        |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.onerror = null
  e.currentTarget.src = 'https://via.placeholder.com/200x200'
}

const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<AvatarProps>;

export const Playground: Story = {
  args: {
    src: '/img_placeholder.png'
  },
  render: (args: AvatarProps) => <Avatar {...args} />
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Avatar type="image" src="/img_placeholder.png" onError={handleError} />
      <Avatar type="icon" />
      <Avatar type="label" />
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Avatar type="image" src="/img_placeholder.png" size="standard" onError={handleError} />
        <Avatar type="image" src="/img_placeholder.png" size="semi" onError={handleError} />
        <Avatar type="image" src="/img_placeholder.png" size="semiX" onError={handleError} />
        <Avatar type="image" src="/img_placeholder.png" size="medium" onError={handleError} />
        <Avatar type="image" src="/img_placeholder.png" size="largeXXX" onError={handleError} />
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Avatar type="icon" size="standard" />
        <Avatar type="icon" size="semi" />
        <Avatar type="icon" size="semiX" />
        <Avatar type="icon" size="medium" />
        <Avatar type="icon" size="largeXXX" />
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <Avatar type="label" size="standard" />
        <Avatar type="label" size="semi" />
        <Avatar type="label" size="semiX" />
        <Avatar type="label" size="medium" />
        <Avatar type="label" size="largeXXX" />
      </div>
    </>
  )
};
