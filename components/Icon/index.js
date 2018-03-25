import PropTypes from 'prop-types'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

export default function Icon (props) {
  const {
    icon
  } = props

  if (icon === 'search') {
    return (
      <FontAwesomeIcon icon={faSearch} />
    )
  }
  return null
}

Icon.propTypes = {
  icon: PropTypes.oneOf(['search'])
}
