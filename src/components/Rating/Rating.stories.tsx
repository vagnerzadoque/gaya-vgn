/* eslint-disable max-len */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Rating } from '.'
import {
  RatingCounterProps, RatingInputProps, RatingProps, RatingReadOnlyProps
} from './Rating.props'

const componentStatus = `
> Provides a user interactive stars for rating or checking something’s rating.

## Properties
| Property                      | Values                                        |    Status           |
|---                            |                                            ---|                  ---|
| **variant**                   | counter, input, read-only                     | ✅ Available        |
| **ariaLabel**                 | string                                        | ✅ Available        |
| **ariaLabelGroup**            | string                                        | ✅ Available        |
| **align**                     | left, right (only for Counter variant)        | ✅ Available        |
| **label**                     | string (only for Input and Counter variant)   | ✅ Available        |
| **size**                      | small:(Read-Only and Counter variants), <br /> standard, semi, semiX, <br />medium:(only for Input variant)  | ✅ Available        |
| **disabled**                  | true/false  (only for Input variant)          | ✅ Available        |
| **onClick**                   | function                                      | ✅ Available        |
| **rate**                      | 0 \\| 1 \\| 2 \\| 3 \\| 4 \\| 5  (only for Read-Only variant)                                     | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<RatingProps> = {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<RatingProps>;
type InputStory = StoryObj<RatingInputProps>;
type ReadOnlyStory = StoryObj<RatingReadOnlyProps>;
type CounterStory = StoryObj<RatingCounterProps>;

export const Playground: Story = {
  args: {
    variant: 'counter',
    label: 'Placeholder',
    size: 'semi',
    ariaLabel: 'rating star'
  },
  render: (args) => <Rating {...args} />
}

export const Input: InputStory = {
  args: {
    ariaLabel: 'rating star',
    disabled: false,
    rate: 2,
    size: 'semi',
    variant: 'input',
    ariaLabelGroup: 'rating star group'
  },
  parameters: { controls: { exclude: ['align', 'rate'] } },
  render: ({ rate, ...args }) => {
    const [rating, setRating] = useState(rate)

    return (
      <Rating {...args} rate={rating} onClick={(e) => setRating(e.target.value)} />
    )
  }
}

export const ReadOnly: ReadOnlyStory = {
  args: {
    ariaLabel: 'rating star',
    rate: 2,
    size: 'semi',
    variant: 'read-only',
    ariaLabelGroup: 'rating star group'
  },
  parameters: { controls: { exclude: ['align', 'label', 'disabled'] } },
  render: (args) => <Rating {...args} />
}

export const Counter: CounterStory = {
  args: {
    align: 'left',
    ariaLabel: 'rating star',
    label: 'Placeholder',
    size: 'semi',
    variant: 'counter'
  },
  parameters: { controls: { exclude: ['rate', 'disabled'] } },
  render: (args) => <Rating {...args} />
}
