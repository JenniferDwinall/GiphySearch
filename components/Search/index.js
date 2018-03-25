import { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from 'components/SearchBar'
import SearchHistory from 'components/SearchHistory'
import SearchResults from 'components/SearchResults'
import Section from 'components/Section'
import GiphyApiClient from 'lib/GiphyApiClient'
import { search } from 'store/actions'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phrase: this.props.value || ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  render () {
    const {
      history,
      modifier
    } = this.props

    const {
      data,
      meta,
      phrase
    } = this.state

    if (meta) {
      const {
        status,
        statusText
      } = meta

      if (status && status !== 200) {
        throw new Error(`${status} - ${statusText}`)
      }
    }

    return (
      <Section title='Search' >
        <SearchBar
          buttonText='search'
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          phrase={phrase}
        />
        <SearchHistory items={history} modifier='fluid' />
        <SearchResults items={data || []} phrase={phrase} modifier={modifier} />
      </Section>
    )
  }

  onChange (e) {
    this.setState({
      phrase: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()
    const {
      phrase
    } = this.state
    if (!phrase) return false

    const {
      limit,
      // offset,
      onSearch
      // rating
    } = this.props

    let params = {}
    if (phrase) params.q = phrase
    if (limit) params.limit = limit
    // @TODO: Implement pagination.
    // if (offset) params.offset = offset
    // @TODO: Implement filters.
    // if (rating) params.rating = rating

    const Giphy = new GiphyApiClient()
    Giphy.search(params)
      .then((response) => {
        this.setState({
          data: response.data,
          meta: response.meta,
          pagination: response.pagination
        })
        onSearch(phrase)
      })
      .catch((err) => {
        this.setState({
          data: err.data || [],
          meta: err.meta,
          pagination: err.pagination || {}
        })
      })
  }
}

const mapStateToProps = function (state) {
  return {
    data: state.data,
    history: state.search.history,
    meta: state.meta,
    pagination: state.pagination,
    phrase: state.search.phrase
  }
}

const mapDispatchToProps = dispatch => ({
  onSearch: phrase => dispatch(search(phrase))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
