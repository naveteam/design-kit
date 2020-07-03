import React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { th, variant, compose, color, layout, space, border } from '@xstyled/system'
import PropTypes from 'prop-types'
import { Typography } from '../'

const Tag = ({ children, ...props }) => (
  <Base {...props}>
    <Text>{children}</Text>
  </Base>
)

const baseProps = compose(color, layout, space, border)

const selectedVariant = variant({
  default: true,
  prop: 'selected',
  key: 'tag',
  variants: {
    true: css`
      background-color: ${({ color }) => th.color(color)};
      border-color: ${({ color }) => th.color(color)};
      cursor: pointer;
      p {
        color: white;
      }
    `,
    false: css`
      background-color: transparent;
      border-color: gray.600;
      cursor: pointer;
      p {
        color: gray.600;
      }
    `,
    disabled: css`
      background-color: disabled;
      border-color: disabled;
      cursor: default;
      p {
        color: white;
      }
    `
  }
})

const Base = styled.div`
  display: inline-block;
  padding: 2;
  border-radius: 2;
  border-width: 1px;
  border-style: solid;
  ${baseProps}
  ${selectedVariant}
`

const Text = styled(Typography)`
  font-weight: 1;
  font-size: 1;
  line-height: 1;
`

Tag.defaultProps = {
  selected: true,
  color: 'primary'
}

Tag.propTypes = {
  selected: PropTypes.oneOf([true, false, 'disabled']),
  color: PropTypes.oneOf(['primary', 'secondary'])
}

export default Tag
