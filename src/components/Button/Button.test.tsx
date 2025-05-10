/* eslint-disable max-lines-per-function */
import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import Button from '.'
import renderWithTheme from '../../helpers/renderWithTheme'
import { ButtonProps } from './Button.props'

jest.mock('../Ripple/Ripple')

const buttonProps: ButtonProps = {
  onClick: () => '',
  children: 'button'
}

describe('Button component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should call onClick', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<Button {...buttonProps} onClick={onClickMock} testID="btn-enable" />)

    fireEvent.click(getByTestId('btn-enable'))

    expect(onClickMock).toHaveBeenCalled()
  })

  it('should not call onClick when is disabled', () => {
    const onClickMock = jest.fn()
    const { component: { getByTestId } } = renderWithTheme(<Button {...buttonProps} disabled onClick={onClickMock} testID="btn-disabled" />)

    fireEvent.click(getByTestId('btn-disabled'))

    expect(getByTestId('btn-disabled')).toBeDisabled()
    expect(onClickMock).not.toHaveBeenCalled()
  })

  it('should render correctly when the size is semi', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} size="semi" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the size is medium', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the fullWidth is true', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} fullWidth />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is contained and disabled is true', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} disabled testID="btn-disabled" />)

    expect(component.getByTestId('btn-disabled')).toBeDisabled()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} variant="outlined" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is text', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} variant="text" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly when the variant is text and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} variant="text" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when the variant is outlined and is disabled', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} variant="outlined" disabled />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render icon to the right as default when the showIcon is true', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} showIcon iconName="outlined-default-mockup" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render icon to the left when the showIcon is true and iconPosition is left', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} showIcon iconPosition="left" iconName="outlined-default-mockup" />)

    expect(component.getByTestId('icon-outlined-default-mockup')).toBeTruthy()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with the given icon name', () => {
    const { styles, component } = renderWithTheme(<Button {...buttonProps} showIcon iconName="filled-action-check" />)

    expect(component.getByTestId('icon-filled-action-check')).toBeTruthy()
    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
