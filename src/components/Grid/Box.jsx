import styled from 'styled-components'
import { compose, space, layout, typography, color, flexboxes, backgrounds } from '@xstyled/system'
import { getSystemPropTypes } from '@xstyled/prop-types'

const props = compose(space, layout, typography, color, flexboxes, backgrounds)

const Box = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  ${props}
`

Box.propTypes = getSystemPropTypes(props)

export default Box
