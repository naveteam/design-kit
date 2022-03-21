import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { layout, space, flexbox, variant } from 'styled-system'

import PropTypes from 'prop-types'

import { Typography, Flex } from '../'
import { Icon } from '../Iconography'

const Button = forwardRef(({ children, icon, direction, caption, captionColor, description, ...props }, ref) => (
  <Base ref={ref} {...props}>
    <Container flexDirection={description ? 'column' : direction}>
      {icon && (
        <StyledIcon
          icon={icon}
          mr={direction === 'row' ? 3 : 0}
          ml={direction === 'row-reverse' ? 3 : 0}
          mb={direction === 'column' ? 3 : 0}
          color={props.variant === 'filled' ? 'white' : props.disabled ? 'gray.500' : props.color}
        />
      )}
      {caption && (
        <Typography
          color={captionColor}
          fontSize={2}
          fontWeight={1}
          lineHeight={3}
          mb={direction === 'column' && (description || children) ? 3 : 0}
        >
          {caption}
        </Typography>
      )}
      {description && (
        <Typography textAlign='center' px={7} fontSize={2} fontWeight={0} lineHeight={1}>
          {description}
        </Typography>
      )}
      {children}
    </Container>
  </Base>
))

const colorVariants = ({ theme: { colors }, color }) =>
  variant({
    prop: 'variant',
    variants: {
      filled: {
        backgroundColor: colors[color],
        borderColor: colors[color],
        color: 'white',
        '&:hover': {
          backgroundColor: colors[`${color}_hover`],
          borderColor: colors[`${color}_hover`]
        },
        '&:active': {
          backgroundColor: colors[`${color}_active`],
          borderColor: colors[`${color}_active`]
        },
        '&:disabled': {
          backgroundColor: colors.gray['500'],
          borderColor: colors.gray['500'],
          color: colors.white
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: colors[color],
        color: colors[color],
        '&:hover': {
          borderColor: colors[`${color}_hover`],
          color: colors[`${color}_hover`]
        },
        '&:active': {
          borderColor: colors[`${color}_active`],
          color: colors[`${color}_active`]
        },
        '&:disabled': {
          borderColor: colors.gray['500'],
          color: colors.gray['500']
        }
      },
      text: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: colors[color],
        '&:hover': {
          color: colors[`${color}_hover`]
        },
        '&:active': {
          color: colors[`${color}_active`]
        },
        '&:disabled': {
          color: colors.gray['500']
        }
      }
    }
  })

const StyledIcon = styled(Icon)`
  ${colorVariants}
`

const Base = styled.button(
  props => css`
    cursor: pointer;
    padding: 4px;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    min-height: 40px;
    &:disabled {
      cursor: not-allowed;
    }
    &:focus {
      outline: none;
    }
    ${StyledIcon} {
      fill: ${props.theme.colors[`${props.color}`]};
      &:hover {
        fill: ${props.theme.colors[`${props.color}_hover`]};
      }
      &:active {
        fill: ${props.theme.colors[`${props.color}_active`]};
      }
      &:disabled {
        fill: disabled;
      }
    }
    ${layout}
    ${space}
    ${flexbox}
    ${colorVariants(props)}
  `
)

const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
`

Button.defaultProps = {
  color: 'primary',
  variant: 'filled',
  width: 1,
  direction: 'row'
}

Button.propTypes = {
  captionColor: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    PropTypes.number,
    PropTypes.string
  ]),
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  icon: PropTypes.string,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string
}

export default Button
