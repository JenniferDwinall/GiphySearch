import { createStore, combineReducers } from 'redux'
import * as reducers from 'store/reducers'

export default function initRedux () {
  return createStore(
    combineReducers({
      ...reducers
    })
  )
}
