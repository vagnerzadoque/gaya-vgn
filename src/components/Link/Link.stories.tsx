import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link, LinkProps } from '.'
import { Icon } from '../Icon'

const componentStatus = `
> The link component allows you to have a pattern for anchor text.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant**               | regular, underline         | ✅ Available        |
| **href**                  | string href                | ✅ Available        |
| **hrefLang**              | string hrefLang            | ✅ Available        |
| **text**                  | string                     | ✅ Available        |
| **textColor**             | default, light             | ✅ Available        |
| **target**                | target ancor               | ✅ Available        |
| **iconPosition**          | left, right                | ✅ Available        |
| **IconComponent**         | component Icon             | ✅ Available        |


## Technical Usages Examples
`

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<LinkProps>;

export const Playground: Story = {
  args: {
    text: 'Link',
    href: 'https://'
  },
  render: (args) => <Link {...args} />
}

export const Variants: Story = {
  args: {
    href: 'https://'
  },
  render: (args) => (
    <>
      <Link {...args} variant="underline" text="underline variant example" />
      <Link {...args} variant="regular" text="regular variant example" />
    </>
  )
}

export const Colors: Story = {
  args: {
    href: 'https://'
  },
  render: (args) => (
    <>
      <Link {...args} text="default link color" />
      <Link {...args} textColor="light" text="light link color" />
    </>
  )
}

export const WithIcon: Story = {
  args: {
    href: 'https://'
  },
  render: (args) => (
    <>
      <Link
        {...args}
        text="right icon example"
        IconComponent={<Icon name="outlined-navigation-directionright-alt" color="link" />}
      />
      <Link
        {...args}
        text="left icon example"
        iconPosition="left"
        IconComponent={<Icon name="outlined-navigation-directionleft-alt" color="link" />}
      />
    </>
  )
}
