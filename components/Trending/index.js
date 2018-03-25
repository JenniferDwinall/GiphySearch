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

  componentWillMount () {
    const Giphy = new GiphyApiClient()
    Giphy.trending()
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
      title
    } = this.props

    const {
      meta,
      data
    } = this.state

    const {
      status,
      statusText
    } = meta

    if (status && status !== 200) {
      throw new Error(`${status} - ${statusText}`)
    }
    return (
      <Section title={title}>
        <SearchResults items={data} />
      </Section>
    )
  }
}

export default Trending
