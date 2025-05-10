import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Image, ImageProps } from '.'
import StoryContainer from '../../helpers/StoryContainer'
import Typography from '../Typography'

const componentStatus = `
> Image is used to display images in the user interface,.

## Properties
| Property                  | Values                     |    Status           |
|---                        |                         ---|                  ---|
| **variant(no prop)**      | Standard                   | ✅ Available        |
| **sourceImage**           | string                     | ✅ Available        |
| **fallbackImage**         | string                     | ✅ Available        |
| **alternativeText**       | string                     | ✅ Available        |
| **highlight**             | true/false                 | ✅ Available        |
| **fade**                  | top, bottom, right, left   | ✅ Available        |
| **border**                | medium, circle             | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<ImageProps> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<ImageProps>;

export const Playground: Story = {
  args: {
    sourceImage: "https://picsum.photos/256",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} />
    </StoryContainer>
  )
};

export const Highlight: Story = {
  args: {
    sourceImage: "https://picsum.photos/256",
    highlight: true
  },
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} />
    </StoryContainer>
  )
};

export const WithFade: Story = {
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} highlight fade="top" sourceImage="https://picsum.photos/256" />
      <Image {...args} highlight fade="bottom" sourceImage="https://picsum.photos/256" />
      <Image {...args} highlight fade="right" sourceImage="https://picsum.photos/256" />
      <Image {...args} highlight fade="left" sourceImage="https://picsum.photos/256" />
    </StoryContainer>
  )
};

export const WithFallback: Story = {
  args: {
    sourceImage: "INVALID_URL",
    fallbackImage: "https://cdn.jsdelivr.net/npm/@naturacosmeticos/natds-web@latest/dist/assets/product-empty-256x256.png",
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} />
    </StoryContainer>
  )
};

export const WithComponent: Story = {
  args: {
    sourceImage: "https://picsum.photos/256",
    highlight: true,
    children: (
      <div style={{ color: '#fff' }}>
        <Typography variant="caption">Lorem Ipsum</Typography>
      </div>
    )
  },
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} />
    </StoryContainer>
  )
};

export const WithBorder: Story = {
  render: (args: ImageProps) => (
    <StoryContainer>
      <Image {...args} sourceImage="https://picsum.photos/256" />
      <Image {...args} border="medium" sourceImage="https://picsum.photos/256" />
      <Image {...args} border="circle" sourceImage="https://picsum.photos/256" />
    </StoryContainer>
  )
};
