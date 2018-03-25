import { Component } from 'react'

import SearchResults from 'components/SearchResults'
import Section from 'components/Section'

import GiphyApiClient from 'lib/GiphyApiClient'

class Trending extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pagination: {},
      meta: {},
      data: []
    }
  }

  componentDidMount () {
    const {
      limit
      // offset,
      // rating
    } = this.props

    let params = {}
    if (limit) params.limit = limit
    // @TODO: Implement pagination.
    // if (offset) params.offset = offset
    // @TODO: Implement filters.
    // if (rating) params.rating = rating

    const Giphy = new GiphyApiClient()
    Giphy.trending(params)
      .then((response) => {
        this.setState({
          data: response.data,
          meta: response.meta,
          pagination: response.pagination
        })
      })
      .catch((err) => {
        this.setState({
          data: err.data || [],
          meta: err.meta,
          pagination: err.pagination || {}
        })
      })
  }

  render () {
    const {
      modifier,
      title
    } = this.props

    const {
      meta,
      data
    } = this.state

    if (!meta) {
      throw new Error(`Trending GIFs are currently unavailable.  Please try again later.`)
    } else {
      const {
        status,
        statusText
      } = meta

      if (status && status !== 200) {
        throw new Error(`${status} - ${statusText}`)
      }
    }
    return (
      <Section title={title}>
        <SearchResults items={data} modifier={modifier} />
      </Section>
    )
  }
}

export default Trending
