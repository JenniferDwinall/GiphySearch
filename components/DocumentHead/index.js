import { Component } from 'react'
import Head from 'next/head'

export default class DocumentHead extends Component {
  render () {
    const { children, docTitle } = this.props
    return (
      <Head>
        <title>{ `${docTitle}` }</title>
        { children }
      </Head>
    )
  }
}
