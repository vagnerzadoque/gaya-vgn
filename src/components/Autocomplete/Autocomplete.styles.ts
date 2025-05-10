/* eslint-disable complexity */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { buildTheme } from '../../ThemeProvider'
import { BrandTypes } from '../../brandTypes/brandTypes'

type AutoCompleteStyleProps = {
  size: 'medium' | 'mediumX'
  isFilled: boolean,
  isDisabled: boolean
  feedback?: 'error' | 'success'
  position?: 'bottom' | 'top'
  readonly?: boolean
  brand?: BrandTypes
}

const getColor = (theme:Theme) => (
  {
    isFilled, feedback, isDisabled
  }: AutoCompleteStyleProps
) => {
  if (feedback === 'error') return theme.color.alert
  if (feedback === 'success') return theme.color.success
  if (isDisabled) return theme.color.lowEmphasis
  if (isFilled) return theme.color.highEmphasis
  return theme.color.highEmphasis
}
const getColorHover = (theme:Theme) => (
  {
    brand
  }: AutoCompleteStyleProps
) => {
  const selectTheme = buildTheme(brand, 'light')
  if (brand) {
    return selectTheme.color.primary
  }
  return theme.color.primary
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.textField.label.primary.fontFamily
  },
  labelText: {
    color: getColor(theme),
    fontFamily: [`"${theme.typography.body.regular.fontFamily}"`, theme.typography.fallback.fontFamily],
    fontSize: theme.textField.label.fontSize,
    fontWeight: theme.textField.label.primary.fontWeight,
    letterSpacing: theme.textField.label.letterSpacing,
    lineHeight: theme.textField.label.lineHeight,
    marginBottom: theme.spacing.micro,
    '&:disabled': {
      color: 'blue'
    }
  },
  inputWrapper: {
    position: 'relative'
  },
  input: {
    width: '100%',
    height: ({ size }: AutoCompleteStyleProps) => theme.size[size],
    position: 'relative',
    // cursor: 'pointer',
    backgroundColor: ({ readonly }: AutoCompleteStyleProps) => (
      readonly ? theme.color.neutral100 : theme.color.surface),
    border: '1px solid',
    borderColor: getColor(theme),
    borderRadius: theme.textField.borderRadius,
    padding: `0 ${theme.spacing.small}px`,
    paddingRight: '45px',
    color: ({ isDisabled }: AutoCompleteStyleProps) => (
      isDisabled ? theme.color.lowEmphasis : theme.color.highEmphasis),
    fontSize: theme.body1.fontSize,
    fontWeight: theme.textField.content.primary.fontWeight,
    letterSpacing: theme.textField.content.letterSpacing,
    lineHeight: theme.textField.content.lineHeight,
    appearance: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    '&::placeholder': {
      color: ({ isDisabled }: AutoCompleteStyleProps) => (
        isDisabled ? theme.color.lowEmphasis : theme.color.highEmphasis)
    },

    '&:focus:enabled': {
      borderColor: getColorHover(theme),
      color: theme.color.mediumEmphasis
    },

    '&:hover:enabled': {
      borderColor: theme.color.highEmphasis,
      color: theme.color.highEmphasis
    }
  },
  icon: {
    color: ({ isDisabled }: AutoCompleteStyleProps) => (isDisabled ? theme.color.lowEmphasis : 'inherit'),
    position: 'absolute',
    top: 0,
    right: theme.spacing.small,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  surfaceWrapper: {
    position: 'absolute',
    width: '100%',
    borderRadius: theme.borderRadius.medium,
    backgroundColor: theme.color.surface,
    boxShadow: theme.elevation.largeX,
    maxHeight: '208px',
    minHeight: '48px',
    overflowY: 'auto',
    bottom: ({ position }: AutoCompleteStyleProps) => (position === 'bottom' ? '56px' : 'initial')
  },
  menuOptionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.size.tiny,
    paddingBottom: theme.size.tiny,
    width: '100%',
    borderRadius: theme.borderRadius.medium,
    margin: '0px',
    padding: '0px'
  },
  optionsItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '48px',
    color: ({ isDisabled }: AutoCompleteStyleProps) => (
      isDisabled ? theme.color.lowEmphasis : theme.color.mediumEmphasis),
    borderRadius: theme.borderRadius.medium,
    '&:hover': {
      backgroundColor: theme.color.neutral200
    },
    transition: 'all 0.3s',
    paddingLeft: theme.size.small,
    paddingRight: theme.size.small,
    boxSizing: 'border-box'
  }
}))

export default styles
