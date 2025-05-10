import React, { useRef, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Snackbar, SnackbarProps } from '.'
import { refProp } from './Snackbar'
import Button from '../Button'
import Icon from '../Icon'

const componentStatus = `

> Snackbar component is used for instant notifications

## Properties
| Property              | Values                                                                      |    Status           |
|---                    |                                                                          ---|                  ---|
| **variant**           | Standard                                                                    | ✅ Available        |
| **Title**             | any string                                                                  | ✅ Available        |
| **Icon**              | Component Icon                                                              | ✅ Available        |
| **directionButton**   | none, inlineButton, blockButton                                             | ✅ Available        |
| **Feedback**          | default, success, error, warning, info,                                     | ✅ Available        |
| **Position**          | topLeft, topCenter, topRight, <br />bottomLeft, bottomCenter, bottomRight   | ✅ Available        |
| **Timer**             | number                                                                      | ✅ Available        |
| **Animation**         | true/false                                                                  | ✅ Available        |
| **buttonComponent**   | Component Button                                                            | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<SnackbarProps> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<SnackbarProps>;

export const Playground: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"
  },
  render: (args) => {
    const [btnStatusD, setBtnStatus] = useState(false)
    const snackRef = useRef<refProp>(null)
    const btnStatus = () => {
      setBtnStatus(true)
      setTimeout(() => {
        setBtnStatus(false)
      }, 2000)
    }
    return (
      <>
        <Snackbar
          {...args}
          ref={snackRef}
        />
        <Button
          disabled={btnStatusD}
          onClick={() => {
            btnStatus()
            return snackRef.current ? snackRef.current.show() : ''
          }}
        >
          Click
        </Button>
      </>
    )
  }
}
export const WithIcon: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"
  },
  render: (args) => {
    const [btnStatusD, setBtnStatus] = useState(false)
    const snackRef = useRef<refProp>(null)
    const btnStatus = () => {
      setBtnStatus(true)
      setTimeout(() => {
        setBtnStatus(false)
      }, 2000)
    }
    return (
      <>
        <Snackbar
          {...args}
          ref={snackRef}
          icon={
            // eslint-disable-next-line react/destructuring-assignment
            <Icon name="outlined-default-mockup" color={args.feedback === 'warning' ? 'highlight' : 'surface'} />
          }
        />
        <Button
          disabled={btnStatusD}
          onClick={() => {
            btnStatus()
            return snackRef.current ? snackRef.current.show() : ''
          }}
        >
          Click
        </Button>
      </>
    )
  }
}

export const WithButton: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"
  },
  render: (args) => {
    const [btnStatusD, setBtnStatus] = useState(false)
    const snackRef = useRef<refProp>(null)
    const btnStatus = () => {
      setBtnStatus(true)
      setTimeout(() => {
        setBtnStatus(false)
      }, 2000)
    }
    return (
      <>
        <Snackbar
          {...args}
          ref={snackRef}
          buttonComponent={(
            <Button
              onClick={fn()}
              variant="contained"
            >
              <span>Default</span>
            </Button>
          )}
        //   icon={
        //     <Icon name="outlined-default-mockup" color="surface" />
        // }
        />
        <Button
          disabled={btnStatusD}
          onClick={() => {
            btnStatus()
            return snackRef.current ? snackRef.current.show() : ''
          }}
        >
          Click
        </Button>
      </>
    )
  }
}
export const WithIconButton: Story = {
  args: {
    children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae veritat!"
  },
  render: (args) => {
    const [btnStatusD, setBtnStatus] = useState(false)
    const snackRef = useRef<refProp>(null)
    const btnStatus = () => {
      setBtnStatus(true)
      setTimeout(() => {
        setBtnStatus(false)
      }, 2000)
    }
    return (
      <>
        <Snackbar
          {...args}
          ref={snackRef}
          buttonComponent={(
            // eslint-disable-next-line react/destructuring-assignment
            <Icon name="outlined-default-mockup" color={args.feedback === 'warning' ? 'highlight' : 'surface'} />
          )}
        />
        <Button
          disabled={btnStatusD}
          onClick={() => {
            btnStatus()
            return snackRef.current ? snackRef.current.show() : ''
          }}
        >
          Click
        </Button>
      </>
    )
  }
}
