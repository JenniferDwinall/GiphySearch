import { Component } from 'react'
import { Provider } from 'react-redux'

import initRedux from './initRedux'

export default WrappedComponent => {
  class WithData extends Component {
    constructor (props) {
      super(props)
      this.redux = initRedux()
    }

    render () {
      return (
        <Provider store={this.redux}>
          <WrappedComponent {...this.props} />
        </Provider>
      )
    }
  }

  return WithData
}
