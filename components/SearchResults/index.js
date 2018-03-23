import { Component } from 'react'
import Heading from 'components/Heading'
import List from 'components/List'
import GiphyApiClient from 'lib/GiphyApiClient'

class SearchResults extends Component {
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
    Giphy.search({ q: 'cats' })
      .then((response) => {
        this.setState({
          data: response.data,
          meta: response.meta,
          pagination: response.pagination
        })
      })
      .catch((e) => {
        console.log('Giphy Error', e)
        this.setState({ e })
      })
  }

  render () {
    console.log('componentDidUpdate', this.state)

    return (
      <div>
        <Heading>search results</Heading>
        <List tag='div' items={this.state.data} />
      </div>
    )
  }
}

export default SearchResults
