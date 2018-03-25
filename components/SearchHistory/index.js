import List from 'components/List'

export default function (props) {
  const {
    items,
    modifier
  } = props

  if (items) {
    return <List tag='ul' items={items} type='History' modifier={modifier} />
  }
  return null
}
