import React from 'react'
import renderWithTheme from '../../helpers/renderWithTheme'
import Logo from './Logo'

describe('Logo component', () => {
  it('should render correctly with default props', () => {
    const { styles, component } = renderWithTheme(<Logo />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with medium size', () => {
    const { styles, component } = renderWithTheme(<Logo size="medium" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with custom color', () => {
    const { styles, component } = renderWithTheme(<Logo color="primary" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })

  it('should render correctly with secondary model', () => {
    const { styles, component } = renderWithTheme(<Logo model="a" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
  it('should render correctly with secondary language default', () => {
    const { styles, component } = renderWithTheme(<Logo languages="default" />)

    expect([styles.toString(), component.container]).toMatchSnapshot()
  })
})
