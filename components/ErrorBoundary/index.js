import { Component } from 'react'

import Section from 'components/Section'

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render () {
    const {
      error
    } = this.state

    const {
      children,
      title
    } = this.props

    if (error) {
      return (
        <Section title={title}>
          <p>
            {'Oh-no! Something went wrong'}
          </p>
          <p>
            {error && error.toString()}
          </p>
        </Section>
      )
    }
    return children
  }
}
