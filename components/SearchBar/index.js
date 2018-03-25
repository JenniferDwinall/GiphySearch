import PropTypes from 'prop-types'

import Icon from 'components/Icon'

export default function SearchBar (props) {
  const {
    buttonText,
    onSubmit,
    onChange,
    phrase
  } = props

  return (
    <form onSubmit={onSubmit}>
      <input
        name='search'
        onChange={onChange}
        type='search'
        value={phrase}
      />
      <button>
        <Icon icon='search' text={buttonText} />
      </button>
    </form>
  )
}

SearchBar.proptypes = {
  buttonText: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  phrase: PropTypes.string
}
