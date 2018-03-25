import PropTypes from 'prop-types'
import styled from 'styled-components'

import ListItem from 'components/ListItem'

export default function List (props) {
  const {
    items,
    modifier,
    tag: Tag,
    type
  } = props

  const CssTag = styled(Tag)`
    list-style-type: none;
    margin: 0;
    padding: 0;
  `

  return (
    <CssTag>{
      items.map((item, key) => <ListItem item={item} key={key} type={type} modifier={modifier} />)
    }</CssTag>
  )
}

List.proptypes = {
  tag: PropTypes.oneOf(['ul', 'ol'])
}
