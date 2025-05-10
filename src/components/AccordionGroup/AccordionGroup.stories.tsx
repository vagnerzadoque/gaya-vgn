import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import AccordionItem from '../AccordionItem'
import StoryContainer from '../../helpers/StoryContainer'
import { AccordionGroup, AccordionGroupProps } from '.'

const componentStatus = `
> AccordionGroup allows groups of several accordion components, allowing collective management and control of multiple expandable panels..

## Properties
| Property         | Values             |    Status           |
|---               |                 ---|                  ---|
| **variant**      | standard           | ✅ Available        |


## Technical Usages Examples
`

const Item = () => {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => setIsActive(!isActive)

  return (
    <AccordionItem title="Lorem ipsum" isActive={isActive} onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt,
      ratione alias recusandae error fuga vero obcaecati impedit in dicta esse
      ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!
    </AccordionItem>
  )
}

const meta: Meta<AccordionGroupProps> = {
  title: 'Components/AccordionGroup',
  component: AccordionGroup,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<AccordionGroupProps>;

export const Playground: Story = {
  render: (args) => (
    <StoryContainer>
      <AccordionGroup {...args}>
        <Item />
        <Item />
        <Item />
      </AccordionGroup>
    </StoryContainer>
  )
};
