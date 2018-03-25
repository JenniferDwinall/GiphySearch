import PropTypes from 'prop-types'

import Heading from 'components/Heading'

const Section = function (props) {
  return (
    <section>
      <Heading>{props.title}</Heading>
      {props.children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired
}

export default Section
