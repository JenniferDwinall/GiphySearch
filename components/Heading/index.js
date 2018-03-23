import PropTypes from 'prop-types'

// import CssHeading from './styled'

const headings = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
]

const Heading = function (props) {
  const {
    tag: Tag
  } = props

  return (
    <Tag>{props.children}</Tag>
  )
}

Heading.defaultProps = {
  tag: 'h1'
}

Heading.propTypes = {
  tag: PropTypes.oneOf(headings).isRequired
}

export default Heading
