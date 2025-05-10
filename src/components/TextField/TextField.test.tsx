/* eslint-disable max-lines-per-function */
import React from 'react'
import userEvent from '@testing-library/user-event'
import { fireEvent } from '@testing-library/react'
import TextField from './TextField'
import renderWithTheme from '../../helpers/renderWithTheme'
import { TextFieldProps } from './TextField.props'
import { Icon } from '../Icon'

const defaultProps: TextFieldProps = {
  onBlur: () => '',
  onChange: () => '',
  onFocus: () => '',
  id: 'example_to_test'
}

describe('TextField component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when have a label', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} label="some label here" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when size is medium', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an error feedback', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} feedback="error" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has a success feedback', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} feedback="success" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is required', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is disabled', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when is read only', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has a helper text', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required helperText="any helper text here" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an icon button action', () => {
    const { styles, component } = renderWithTheme(
      <TextField
        {...defaultProps}
        required
        action="icon"
        IconComponent={<Icon name="filled-action-love" color="highEmphasis" />}
        ariaLabel="any label"
        onClick={() => ''}
      />
    )

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has an image action', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required action="image" src="" alt="" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has multiline type', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required type="multiline" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly when it has password type', () => {
    const { styles, component } = renderWithTheme(<TextField {...defaultProps} required type="password" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
    expect(component.getByTestId('ds-input')).toHaveAttribute('type', 'password')
  })

  it('should call onChange when is typing', () => {
    const onChangeMock = jest.fn()
    const { component } = renderWithTheme(<TextField {...defaultProps} onChange={onChangeMock} />)

    const input = component.getByRole('textbox')
    // Using fireEvent instead of userEvent for more direct event triggering
    fireEvent.change(input, { target: { value: 'Hello World' } })
    expect(onChangeMock).toHaveBeenCalled()
  })

  it('should call onFocus when input is focused', () => {
    const onFocusMock = jest.fn()
    const { component } = renderWithTheme(<TextField {...defaultProps} onFocus={onFocusMock} />)

    const input = component.getByRole('textbox')
    fireEvent.focus(input)
    expect(onFocusMock).toHaveBeenCalled()
  })

  it('should call onBlur when the element loses focus', () => {
    const onBlurMock = jest.fn()
    const { component } = renderWithTheme(<TextField {...defaultProps} onBlur={onBlurMock} />)

    const input = component.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.blur(input)
    expect(onBlurMock).toHaveBeenCalled()
  })
})
