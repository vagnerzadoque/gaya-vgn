import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import TabItem from '../TabItem'
import { Tab, TabProps } from '.'
import Icon from '../Icon'

const componentStatus = `
> used to create tabs in a user interface.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant (no prop)**         | Standard                                      | ✅ Available        |
| **icon**                      | left, top,  [icon (available but with alternative composition)]                         | ✅ Available        |
| **align**                     | left, center, right                           | ✅ Available        |
| **position**                  | fixed, scrollable                             | ✅ Available        |
| **elevation**                 | true/false                                    | ✅ Available        |
| **color**                     | true/false                                    | ✅ Available        |
| **disabled**                  | (available but with alternative composition)  | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<TabProps> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<TabProps>;

// eslint-disable-next-line no-console
const onClick = fn(() => console.log('Tab is clicked'))

export const Playground: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabItem onClick={onClick} isActive>
        Tab 1
      </TabItem>
      <TabItem onClick={onClick}>
        Tab 2
      </TabItem>
      <TabItem onClick={onClick} isDisabled>
        Tab 3
      </TabItem>
    </Tab>
  )
}
export const Brand: Story = {
  args: {
    brand: "avon_v2"
  },
  render: (args) => (
    <Tab {...args}>
      <TabItem {...args} onClick={onClick} isActive>
        Tab 1
      </TabItem>
      <TabItem {...args} onClick={onClick}>
        Tab 2
      </TabItem>
      <TabItem {...args} onClick={onClick} isDisabled>
        Tab 3
      </TabItem>
    </Tab>
  )
}

export const WithIcons: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabItem onClick={onClick} isActive>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
        Tab 1
      </TabItem>
      <TabItem onClick={onClick}>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
        Tab 2
      </TabItem>
      <TabItem onClick={onClick} isDisabled>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
        Tab 3
      </TabItem>
    </Tab>
  )
}

export const OnlyIcons: Story = {
  render: (args) => (
    <Tab {...args}>
      <TabItem onClick={onClick} isActive>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      </TabItem>
      <TabItem onClick={onClick}>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      </TabItem>
      <TabItem onClick={onClick} isDisabled>
        <Icon size="standard" name="outlined-default-mockup" color="highEmphasis" />
      </TabItem>
    </Tab>
  )
}

export const WithHorizontalScroll: Story = {
  args: {
    position: "scrollable"
  },
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Tab {...args}>
        <TabItem onClick={onClick} isActive>
          Tab 1
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 2
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 3
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 4
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 5
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 6
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 7
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 8
        </TabItem>
        <TabItem onClick={onClick}>
          Tab 9
        </TabItem>
      </Tab>
    </div>
  )
}
