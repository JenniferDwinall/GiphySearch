import {
  SEARCH
} from './actions'

const update = (state, mutations) => Object.assign({}, state, mutations)

const initialState = {
  phrase: null,
  history: []
}

export function search (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      const phrase = action.phrase
      if (!phrase) return state

      let history = state.history
      if (history.indexOf(phrase) === -1) {
        history.push(phrase)
      }

      const updatedState = update(state, {
        history: history,
        phrase: action.phrase
      })
      return updatedState

    default:
      return state
  }
}
