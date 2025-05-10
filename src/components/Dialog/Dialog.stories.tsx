import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Dialog } from '.'
import { Button } from '../Button'
import { DialogProps } from './Dialog.props'
import { IconButton } from '../IconButton'
import { DialogHeader } from './DialogHeader'
import { DialogBody } from './DialogBody'
import { DialogFooter } from './DialogFooter'
import { Icon } from '../Icon'

const componentStatus = `
> Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

## Properties
| Property                      | Values                                                              |    Status           |
|---                            |                                                                  ---|                  ---|
| **variant(no prop)**          | Standard/Alert  (available but with alternative composition)        | ✅ Available        |
| **ariaDescribedBy**           | string                                                              | ✅ Available        |
| **ariaLabelledBy**            | string                                                              | ✅ Available        |
| **container**                 | An HTML element or function that returns one                        | ✅ Available        |
| **onEscapeKeyDown**           | function                                                            | ✅ Available        |
| **role**                      | dialog, alertdialog                                                 | ✅ Available        |
| **open**                      | true/false                                                          | ✅ Available        |
| **size**                      | small, medium, large                                                | ✅ Available        |
| **brand**                     | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo    | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<DialogProps> = {
  title: 'Components/Dialog',
  component: Dialog,
  subcomponents: { DialogHeader, DialogBody, DialogFooter },
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
};

export default meta;
type Story = StoryObj<DialogProps>;

export const Playground: Story = {
  args: {
    ariaDescribedBy: 'dialog-description',
    ariaLabelledBy: 'dialog-title',
    open: true,
    role: 'dialog'
  },
  render: ({ open, ...args }) => {
    const [showDialog, setShowDialog] = useState(open)

    return (
      <>
        <Button onClick={() => setShowDialog(!showDialog)}>open dialog</Button>
        <Dialog {...args} open={showDialog} onEscapeKeyDown={() => setShowDialog(false)}>
          <DialogHeader title="Example" id="dialog-title">
            <div style={{ display: 'flex', gap: 16 }}>
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
            </div>
          </DialogHeader>
          <DialogBody showDivider>
            <p id="dialog-description" style={{ margin: 0 }}>
              This is an example of Dialog, which uses the DialogHeader, with title
              and three IconButtons, DialogBody and DialogFooter, with one button.
            </p>
          </DialogBody>
          <DialogFooter
            primaryButton={<Button onClick={() => setShowDialog(false)}>primary button close</Button>}
            secondaryButton={<Button variant="text" onClick={() => setShowDialog(false)}>secondary button close</Button>}
          />
        </Dialog>
      </>
    )
  }
}

export const Accessibility: Story = {
  args: {
    accessibility: {
      role: 'dialog',
      'aria-modal': false,
      'aria-labelledby': 'Gaya aria-labelledby',
      'aria-describedby': 'Gaya aria-describedby',
      'aria-label': 'Gaya aria-label',
      tabIndex: 0
    },
    ariaDescribedBy: 'dialog-description',
    ariaLabelledBy: 'dialog-title',
    open: true,
    role: 'dialog'
  },
  render: ({ open, ...args }) => {
    const [showDialog, setShowDialog] = useState(open)

    return (
      <>
        <Button onClick={() => setShowDialog(!showDialog)}>open dialog</Button>
        <Dialog {...args} open={showDialog} onEscapeKeyDown={() => setShowDialog(false)}>
          <DialogHeader accessibility={{ role: 'heading' }} title="Example" id="dialog-title">
            <div style={{ display: 'flex', gap: 16 }}>
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
              <IconButton
                onClick={fn()}
                ariaLabel="any icon"
                IconComponent={<Icon name="outlined-default-mockup" color="highEmphasis" />}
              />
            </div>
          </DialogHeader>
          <DialogBody showDivider accessibility={{ role: 'document' }}>
            <p id="dialog-description" style={{ margin: 0 }}>
              This is an example of Dialog, which uses the DialogHeader, with title
              and three IconButtons, DialogBody and DialogFooter, with one button.
            </p>
          </DialogBody>
          <DialogFooter
            accessibility={{ role: 'group' }}
            primaryButton={<Button onClick={() => setShowDialog(false)}>primary button close</Button>}
            secondaryButton={<Button variant="text" onClick={() => setShowDialog(false)}>secondary button close</Button>}
          />
        </Dialog>
      </>
    )
  }
}
