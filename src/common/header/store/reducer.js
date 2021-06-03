import * as constants from './constants'
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false
})

const func = (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    // state.set: used to change the value of data in immutable object
    // immutable change the value and return a brand new object
    return state.set('focused', true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}

export default func