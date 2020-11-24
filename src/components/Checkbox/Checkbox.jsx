import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled, { css, down, typography } from '@xstyled/styled-components'

import { Typography } from '../'
import { Flex } from '../Grid'
import { Icon } from '../Iconography'

const Checkbox = forwardRef(
  ({ label, color, name, disabled, onChange, value, defaultValue, checked, ...props }, ref) => {
    return (
      <LabelContainer as='label' color={color} {...props}>
        <Input
          type='checkbox'
          ref={ref}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        <CheckedIcon icon='checkbox_checked' color='primary' />
        <UncheckedIcon icon='checkbox_outline' />
        {label && (
          <Typography fontSize={3} lineHeight={3} fontWeight={0} paddingLeft={3}>
            {label}
          </Typography>
        )}
      </LabelContainer>
    )
  }
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string
}

const CheckedIcon = styled(Icon)`
  display: none;
`
const UncheckedIcon = styled(Icon)`
  & path {
    fill: gray.700;
  }
`

const LabelContainer = styled(Flex)`
  display: inline-flex;
  vertical-align: top;
  position: relative;
  user-select: none;
  color: gray.800;
  min-height: 24px;

  ${down(
    'sm',
    css`
      display: flex;
    `
  )}

  & >
    input:checked:enabled
    ~ p {
    color: gray.900;
    ${typography}
  }
  ${typography}
`

const Input = styled.input`
  opacity: 0;
  margin: 0;
  height: 0;
  width: 0;

  & ~ p,
  & ~ svg {
    cursor: pointer;
  }

  &:disabled ~ p,
  &:disabled ~ svg {
    cursor: not-allowed;
  }

  &:checked + ${CheckedIcon} {
    display: inherit;
    & + ${UncheckedIcon} {
      display: none;
    }
  }

  &:disabled ~ svg path {
    fill: gray.400;
  }

  &:disabled ~ p {
    color: disabled;
  }
`

export default Checkbox
