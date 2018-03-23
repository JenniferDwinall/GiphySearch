import Picture from 'components/Picture'

export default function ListItem (props) {
  const {
    item
  } = props
  console.log('props', props)
  return (
    <li>
      {item.title}
      <Picture sources={item.images} />
    </li>
  )
}
