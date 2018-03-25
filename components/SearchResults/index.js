import List from 'components/List'

export default function (props) {
  const {
    items
  } = props

  if (items.length) {
    return <List tag='ul' items={items} type='Giphy' />
  }
  return null
}
