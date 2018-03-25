import PropTypes from 'prop-types'

export default function Picture (props) {
  const {
    sources
  } = props

  // @TODO: Make images responsive.
  return (
    <picture>
      <source media='(max-width: 1024px)' srcSet={sources.fixed_width.url} />
      <img alt={sources.fixed_width.title} src={sources.fixed_width.url} />
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
