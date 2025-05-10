import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useTheme } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Collapse, CollapseProps } from '.'
import Button from '../Button'

const meta: Meta<CollapseProps> = {
  title: 'Utilities/Collapse',
  component: Collapse
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const Playground: Story = {
  render: (args) => {
    const theme: Theme = useTheme()
    const [opened, setOpened] = useState(false)
    const text = opened ? 'hide content' : 'show content'

    return (
      <>
        <Button onClick={() => setOpened(!opened)}>{text}</Button>
        <Collapse {...args} open={opened}>
          <p style={{
            color: theme.color.onSurface,
            fontFamily: theme.typography.fontFamily.primary
          }}
          >
            some content
          </p>
        </Collapse>
      </>
    )
  }
};
