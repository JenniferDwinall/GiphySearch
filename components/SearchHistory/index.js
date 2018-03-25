import List from 'components/List'

export default function (props) {
  const {
    items
  } = props

  if (items) {
    return <List tag='ul' items={items} type='History' />
  }
  return null
}
