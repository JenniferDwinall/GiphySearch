import PropTypes from 'prop-types'

import {
  CssSpan
} from './styled'

export default function History (props) {
  const {
    phrase
  } = props

  return <CssSpan>"{phrase}"</CssSpan>
}

History.propTypes = {
  phrase: PropTypes.string.isRequired
}
