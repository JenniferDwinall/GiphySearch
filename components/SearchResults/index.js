import List from 'components/List'

export default function (props) {
  const {
    items,
    modifier
  } = props

  return <List tag='ul' items={items} modifier={modifier} type='Giphy' />
}
