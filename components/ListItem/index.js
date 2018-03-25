import PropTypes from 'prop-types'

import Giphy from 'components/Giphy'
import History from 'components/History'

import {
  CssLi
} from './styled'

export default function ListItem (props) {
  const {
    item,
    type
  } = props

  return (
    <CssLi>
      <Component type={type} item={item} />
    </CssLi>
  )
}

ListItem.propTypes = {
  type: PropTypes.oneOf(['Giphy', 'History'])
}

function Component ({type, ...props}) {
  if (type === 'Giphy') return <Giphy {...props} />
  else if (type === 'History') return <History phrase={props.item} />
  else return null
}
