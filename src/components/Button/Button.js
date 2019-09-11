import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import modifiers from 'src/helpers/modifiers'

const PRIMARY = 'primary'

const SECONDARY = 'secondary'

const GHOST = 'ghost'

const DefaultButton = styled.button`
  border: 0;
  outline: none;
  height: 32px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  width: 140px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`

const Button = props => {
  const { variant, ...rest } = props
  if (variant === PRIMARY) {
    return <PrimaryButton {...rest} />
  }

  if (variant === SECONDARY) {
    return <SecondaryButton {...rest} />
  }

  if (variant === GHOST) {
    return <GhostButton {...rest} />
  }
  return <PrimaryButton {...rest} />
}

const PrimaryButton = styled(DefaultButton)`
  ${props => {
    const { theme } = props
    return `
      ${modifiers(props)}
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.darkBlue};
      }
      &:focus {
        box-shadow: 0 0 4px 4px rgba(0, 125, 254, 0.3);
      }
      &:disabled {
        background-color: ${theme.colors.grey};
        color: rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: not-allowed;
        }
      }
    `
  }};
`

const SecondaryButton = styled(DefaultButton)`
  ${props => {
    const { theme } = props
    return `
      ${modifiers(props)}
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      border: 1px solid ${theme.colors.blue};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
      }
      &:focus {
        box-shadow: 0 0 4px 4px rgba(0, 125, 254, 0.3);
      }
      &:disabled {
        background-color: ${theme.colors.white};
        color: rgba(0, 0, 0, 0.3);
        border: 1px solid ${theme.colors.grey};
        &:hover {
          cursor: not-allowed;
        }
      }
    `
  }};
`

const GhostButton = styled(DefaultButton)`
  ${props => {
    const { theme } = props
    return `
      ${modifiers(props)}
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      &:hover {
        background-color: ${theme.colors.grey};
      }
      &:focus {
        box-shadow: 0 0 4px 4px rgba(0, 125, 254, 0.3);
        :hover {
          background-color: ${theme.colors.white};
        }
      }
      &:disabled {
        background-color: ${theme.colors.white};
        color: rgba(0, 0, 0, 0.3);
        &:hover {
          cursor: not-allowed;
        }
      }
    `
  }};
`

Button.propTypes = {
  variant: PropTypes.string
}

export default Button
