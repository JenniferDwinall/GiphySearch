import propTypes from 'prop-types'

export default function Picture (props) {
  const {
    sources
  } = props

  return (
    <picture>
      <source media='(min-width: 465px)' srcSet={sources.fixed_width.url} />
      <img alt={sources.original.title} src={sources.original.url} />
    </picture>
  )
}

const sourceShape = {
  url: propTypes.string,
  width: propTypes.string,
  height: propTypes.string,
  size: propTypes.string,
  mp4: propTypes.string,
  mp4Size: propTypes.string,
  webp: propTypes.string,
  webpSize: propTypes.string
}

Picture.propTypes = {
  sources: propTypes.objectOf(propTypes.shape(sourceShape))
}
