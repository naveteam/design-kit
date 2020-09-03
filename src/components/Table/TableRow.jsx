import React from 'react'
import styled from '@xstyled/styled-components'
import PropTypes from 'prop-types'

import { Typography } from '../'

const TableRow = ({ children }) => <Container>{children}</Container>

const Container = styled.tr`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
`

export default TableRow
