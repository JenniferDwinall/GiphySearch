import PropTypes from 'prop-types'

export default function Picture (props) {
  const {
    sources
  } = props

  return (
    <picture>
      <source media='(min-width: 300px)' srcSet={sources.fixed_width.url} />
      <source media='(min-width: 450px)' srcSet={sources.original.url} />
      <img alt={sources.original.title} src={sources.original.url} />
    </picture>
  )
}

const sourceShape = {
  url: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  mp4: PropTypes.string,
  mp4Size: PropTypes.string,
  webp: PropTypes.string,
  webpSize: PropTypes.string
}

Picture.propTypes = {
  sources: PropTypes.objectOf(PropTypes.shape(sourceShape))
}
