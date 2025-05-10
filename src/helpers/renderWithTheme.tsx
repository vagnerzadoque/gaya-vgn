import React from 'react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import themes from '@naturacosmeticos/natds-themes'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../ThemeProvider'

const renderWithTheme = (component: JSX.Element) => {
  const sheets = new SheetsRegistry()

  const renderTree = render(
    <JssProvider registry={sheets}>
      <ThemeProvider theme={themes.natura.light}>
        {component}
      </ThemeProvider>
    </JssProvider>
  )

  return { styles: sheets.toString(), component: renderTree }
}

export default renderWithTheme
