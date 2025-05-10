/* eslint-disable max-statements-per-line */
/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { IconName } from '@naturacosmeticos/natds-icons'
import { createUseStyles } from 'react-jss'
import { Theme } from '@naturacosmeticos/natds-themes'
import { Drawer, DrawerProps } from '.'
import { IconButton } from '../IconButton'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Avatar } from '../Avatar'
import { Divider } from '../Divider'
import { ListItem } from '../ListItem'
import { Badge } from '../Badge'

const componentStatus = `
> A Drawer is a thin line that groups content in lists and layouts.

## Properties
| Property                      | Values                                |    Status           |
|---                            |                                    ---|                  ---|
| **variant(no prop)**          | Base                                  | ✅ Available        |
| **open**                      | true/false                            | ✅ Available        |
| **handleClick**               | function                              | ✅ Available        |
| **size**                      | small, medium, large                  | ✅ Available        |
| **position**                  | left, right, top, bottom              | ✅ Available        |

## Technical Usages Examples
`

const meta: Meta<DrawerProps> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } }
  }
};

export default meta;
type Story = StoryObj<DrawerProps>;

export const Playground: Story = {
  render: (args) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const {
      footer,
      header,
      headerButton,
      headerTitle,
      main,
      sectionItem
    } = styles()
    return (
      <div style={{
        overflow: 'hidden', maxWidth: '1280px', maxHeight: '980px'
      }}
      >
        <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
        <Drawer {...args} open={showDrawer} handleClick={() => setShowDrawer(!showDrawer)}>
          <div className={header}>
            <Avatar type="icon" />
            <h6 className={headerTitle}>Hello, Design System</h6>
            <div className={headerButton}>
              <IconButton
                onClick={() => setShowDrawer(!showDrawer)}
                ariaLabel="close drawer"
                IconComponent={<Icon name="outlined-navigation-close" />}
              />
            </div>
          </div>
          <Divider />
          <div className={main}>
            <ul style={{ padding: 0, margin: 0, width: '100%' }}>
              {items.body.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
          <div className={footer}>
            <Divider />
            <ul style={{ padding: 0, margin: 0, overflow: 'auto' }}>
              {items.footer.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}
export const Right: Story = {
  args: {
    position: "right"
  },
  render: (args) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const {
      footer,
      header,
      headerButton,
      headerTitle,
      main,
      sectionItem
    } = styles()
    return (
      <div style={{
        overflow: 'hidden', width: '100%', height: '100%'
      }}
      >
        <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
        <Drawer {...args} open={showDrawer}>
          <div className={header}>
            <Avatar type="icon" />
            <h6 className={headerTitle}>Hello, Design System</h6>
            <div className={headerButton}>
              <IconButton
                onClick={() => setShowDrawer(!showDrawer)}
                ariaLabel="close drawer"
                IconComponent={<Icon name="outlined-navigation-close" />}
              />
            </div>
          </div>
          <Divider />
          <div className={main}>
            <ul style={{ padding: 0, margin: 0, width: '100%' }}>
              {items.body.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
          <div className={footer}>
            <Divider />
            <ul style={{ padding: 0, margin: 0, overflow: 'auto' }}>
              {items.footer.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}
export const Top: Story = {
  args: {
    position: "top"
  },
  render: (args) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const {
      footer,
      header,
      headerButton,
      headerTitle,
      main,
      sectionItem
    } = styles()
    return (
      <div style={{
        overflow: 'hidden', width: '100%', height: '100%'
      }}
      >
        <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
        <Drawer {...args} open={showDrawer}>
          <div className={header}>
            <Avatar type="icon" />
            <h6 className={headerTitle}>Hello, Design System</h6>
            <div className={headerButton}>
              <IconButton
                onClick={() => setShowDrawer(!showDrawer)}
                ariaLabel="close drawer"
                IconComponent={<Icon name="outlined-navigation-close" />}
              />
            </div>
          </div>
          <Divider />
          <div className={main}>
            <ul style={{ padding: 0, margin: 0, width: '100%' }}>
              {items.body.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
          <div className={footer}>
            <Divider />
            <ul style={{ padding: 0, margin: 0, overflow: 'auto' }}>
              {items.footer.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}
export const Bottom: Story = {
  args: {
    position: "bottom"
  },
  render: (args) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const {
      footer,
      header,
      headerButton,
      headerTitle,
      main,
      sectionItem
    } = styles()
    return (
      <div style={{
        overflow: 'hidden', width: '100%', height: '100%'
      }}
      >
        <Button onClick={() => setShowDrawer(!showDrawer)}>Open Drawer</Button>
        <Drawer {...args} open={showDrawer}>
          <div className={header}>
            <Avatar type="icon" />
            <h6 className={headerTitle}>Hello, Design System</h6>
            <div className={headerButton}>
              <IconButton
                onClick={() => setShowDrawer(!showDrawer)}
                ariaLabel="close drawer"
                IconComponent={<Icon name="outlined-navigation-close" />}
              />
            </div>
          </div>
          <Divider />
          <div className={main}>
            <ul style={{ padding: 0, margin: 0, width: '100%' }}>
              {items.body.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
          <div className={footer}>
            <Divider />
            <ul style={{ padding: 0, margin: 0, overflow: 'auto' }}>
              {items.footer.map((item, id) => (
                <ListItem key={id} interaction="action">
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <Icon name={item.icon as IconName} />
                    <span className={sectionItem}>
                      {item.name}
                      {item.new && <Badge variant="pulse" />}
                    </span>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        </Drawer>
      </div>
    )
  }
}

const items = {
  body: [
    {
      name: 'Favorites',
      icon: 'outlined-action-love',
      new: false
    },
    {
      name: 'Invite & Earn',
      icon: 'outlined-social-groupofpeople',
      new: false
    },
    {
      name: 'Coupons',
      icon: 'outlined-finance-discount',
      new: true
    },
    {
      name: 'Orders',
      icon: 'outlined-action-request',
      new: false
    },
    {
      name: 'Gifts',
      icon: 'outlined-content-gift',
      new: false
    },
    {
      name: 'Perfumery',
      icon: 'outlined-product-perfumery',
      new: false
    },
    {
      name: 'Body',
      icon: 'outlined-product-dailycare',
      new: false
    },
    {
      name: 'Make Up',
      icon: 'outlined-product-makeup',
      new: false
    },
    {
      name: 'Sales',
      icon: 'outlined-product-promotionproduct',
      new: false
    }
  ],
  footer: [
    {
      name: 'Sign Out',
      icon: 'outlined-navigation-exit',
      new: false
    },
    {
      name: 'Help',
      icon: 'outlined-action-help',
      new: false
    },
    {
      name: 'Privacy Policy',
      icon: 'outlined-social-person',
      new: false
    }
  ]
}

const styles = createUseStyles((theme: Theme) => ({
  sectionItem: {
    fontFamily: [
      theme.navigationDrawer.section.item.primary.fontFamily,
      theme.navigationDrawer.section.item.fallback.fontFamily
    ],
    fontWeight: [
      theme.navigationDrawer.section.item.primary.fontWeight,
      theme.navigationDrawer.section.item.fallback.fontWeight
    ],
    fontSize: theme.navigationDrawer.section.item.fontSize,
    letterSpacing: theme.navigationDrawer.section.item.letterSpacing,
    lineHeight: theme.navigationDrawer.section.item.lineHeight,
    display: 'flex',
    gap: theme.spacing.micro
  },
  footer: {},
  header: {
    padding: theme.spacing.small
  },
  headerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 8,
    position: 'absolute',
    top: 0,
    right: 0
  },
  headerTitle: {
    fontFamily: [
      theme.navigationDrawer.header.title.primary.fontFamily,
      theme.navigationDrawer.header.title.fallback.fontFamily
    ],
    fontWeight: theme.navigationDrawer.header.title.primary.fontWeight,
    fontSize: theme.navigationDrawer.header.title.fontSize,
    letterSpacing: theme.navigationDrawer.header.title.letterSpacing,
    lineHeight: theme.navigationDrawer.header.title.lineHeight,
    margin: [theme.spacing.small, 0, theme.spacing.micro]
  },
  main: {
    flex: '1 1 auto',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    overflowY: 'auto'
  }
}))
