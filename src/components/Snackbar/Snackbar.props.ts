import React from 'react'

export interface SnackbarProps {
  /**
   * Specify an optional className to be added to your Snackbar
   */
  className?: string

  /**
   * Optional ID for testing
   */
  testID?: string;

  /**
   * Define if an title to be added to your Snackbar
   */
  title?: string;

  /**
   * Define if an icon to be added to your Snackbar
   */
  icon?: React.ReactNode;

  /**
   * Define if an button action to be added to your Snackbar
   */
  directionButton?: 'none' | 'inlineButton' | 'blockButton';

  /**
   * Define if an button action to be added to your Snackbar
   */
  feedback?: 'default' | 'success' | 'error' | 'warning' | 'info';

  /**
   * Define an position to your Snackbar
   */
  position?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';

  /**
   * Define an time to your Snackbar
   */
  // timer: 'minimum' | 'intermediary' | 'indeterminate' | number;
  timer?: number;

  /**
   * Define if amimation true / false to your Snackbar
   */
  animation?: boolean

  /**
   * Define an button Component to your Snackbar
   */
  buttonComponent?: React.ReactNode

  /**
   * Define an children Component to your Snackbar
   */
  children?: React.ReactNode

}
