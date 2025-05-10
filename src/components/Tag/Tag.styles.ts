/* eslint-disable max-len */
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { TagProps } from './Tag.props'
import { buildTheme } from '../../ThemeProvider'

type TagStyleProps = Pick<TagProps, 'size' | 'color' | 'position' | 'customBackgroundColor' | 'customLabelColor' | 'brand'>

const getBorderStyles = (theme: Theme) => ({ position, size }: TagStyleProps) => {
  const border = {
    center: size && theme.tag[size].borderRadius.enable,
    left: size && `${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px`,
    right: size && `${theme.tag[size].borderRadius.enable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.disable}px ${theme.tag[size].borderRadius.enable}px`
  }

  return position && border[position]
}

const getThemeTag = (theme: Theme) => ({ brand, color }: TagStyleProps) => {
  const themeSelectTag = buildTheme(brand, 'light')
  if (brand) {
    return color && {
      back: themeSelectTag.tag.color.background[color],
      color: themeSelectTag.tag.color.label[color]
    }
  }
  return color && {
    back: theme.tag.color.background[color],
    color: theme.tag.color.label[color]
  }
}

const styles = createUseStyles((theme: Theme) => ({
  wrapper: {
    display: 'flex'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.size.micro,
    backgroundColor: ({ customBackgroundColor, color = 'primary', brand }: TagStyleProps) => (
      customBackgroundColor || getThemeTag(theme)({ color, brand })?.back
    ),
    borderRadius: getBorderStyles(theme),
    height: ({ size }: TagStyleProps) => size && theme.size[size],
    padding: [0, theme.spacing.tiny],
    overflow: 'hidden'
  },
  content: {
    color: ({ customLabelColor, color = 'primary', brand }: TagStyleProps) => (
      customLabelColor || getThemeTag(theme)({ color, brand })?.color
    ),
    fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
    fontSize: theme.tag.label.fontSize,
    fontWeight: theme.tag.label.primary.fontWeight,
    letterSpacing: theme.tag.label.letterSpacing,
    lineHeight: theme.tag.label.lineHeight,
    userSelect: 'none',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
}))

export default styles
