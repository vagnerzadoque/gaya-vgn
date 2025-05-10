import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';
import StoryContainer from '../../helpers/StoryContainer';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: '',
    docs: { 
      description: { 
        component: `
          > Esse componente foi depreciado.
          > Recomendamos o uso do GayaButton.
        ` 
      } 
    }
  }
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
  args: {
    // default args here
  },
  render: (args) => <Button {...args} />
};
