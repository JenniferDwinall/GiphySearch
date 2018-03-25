import PropTypes from 'prop-types'

import Picture from 'components/Picture'

export default function Giphy (props) {
  const {
    item
  } = props

  if (item.images) {
    return (
      <span>
        <Picture sources={item.images} />
      </span>
    )
  }
  return null
}

Giphy.propTypes = {
  item: PropTypes.object.isRequired
}
