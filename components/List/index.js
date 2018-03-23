import PropTypes from 'prop-types'

import ListItem from 'components/ListItem'

export default function List (props) {
  const {
    items,
    tag: Tag
  } = props

  return (
    <Tag>{
      items.map((item, key) => <ListItem item={item} key={key} />)
    }</Tag>
  )
}

List.proptypes = {
  tag: PropTypes.oneOf(['ul', 'ol'])
}
