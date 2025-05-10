import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import StoryContainer from '../../helpers/StoryContainer'
import { AccordionItem, AccordionItemProps } from '.'

const componentStatus = `
> AccordionItem representing an individual item that can be expanded or collapsed in response to user interaction.

## Properties
| Property         | Values                |    Status           |
|---               |                    ---|                  ---|
| **variant**      | standard              | ✅ Available        |
| **title**        | string                | ✅ Available        |
| **legend**       | string                | ✅ Available        |
| **color**        | regular, primary'     | ✅ Available        |
| **isActive**     | true/false            | ✅ Available        |
| **isDisabled**   | true/false            | ✅ Available        |
| **onClick**      | function              | ✅ Available        |
| **brand**        | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo              | ✅ Available        |


## Technical Usages Examples
`

const meta: Meta<AccordionItemProps> = {
  title: 'Components/AccordionItem',
  component: AccordionItem,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<AccordionItemProps>;

export const Playground: Story = {
  args: {
    title: "Subtitle 1",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
      <StoryContainer>
        <AccordionItem {...args} isActive={isActive} onClick={onClick} />
      </StoryContainer>
    )
  }
};

export const Primary: Story = {
  args: {
    title: "Subtitle 1",
    color: "primary",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(true)
    const onClick = () => setIsActive(!isActive)

    return (
      <StoryContainer>
        <AccordionItem {...args} isActive={isActive} onClick={onClick} />
      </StoryContainer>
    )
  }
};

export const Brand: Story = {
  args: {
    brand: "avon_v2",
    title: "Subtitle 1",
    color: "primary",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(true)
    const onClick = () => setIsActive(!isActive)

    return (
      <StoryContainer>
        <AccordionItem {...args} isActive={isActive} onClick={onClick} />
      </StoryContainer>
    )
  }
};

export const Disabled: Story = {
  args: {
    title: "Subtitle 1",
    isDisabled: true,
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"
  },
  render: (args) => (
    <StoryContainer>
      <AccordionItem {...args} onClick={fn()} />
    </StoryContainer>
  )
};

export const Legend: Story = {
  args: {
    title: "Subtitle 1",
    legend: "Legend",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, ratione alias recusandae error fuga vero obcaecati impedit in dicta esse ad debitis iure voluptatem ipsam atque! Quam, doloribus alias!"
  },
  render: (args) => {
    const [isActive, setIsActive] = useState(true)
    const onClick = () => setIsActive(!isActive)

    return (
      <StoryContainer>
        <AccordionItem {...args} isActive={isActive} onClick={onClick} />
      </StoryContainer>
    )
  }
};
