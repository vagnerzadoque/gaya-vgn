import React from 'react';

export interface AccordionGroupProps {
  /**
   * Specify an optional className to be added to your Accordion
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Children elements
   */
  children?: React.ReactNode;
}
