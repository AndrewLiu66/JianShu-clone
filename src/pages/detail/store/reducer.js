// 将state 变为一个immutable对象后不能直接修改其数据，必须要通过其方法才能进行修改
import { fromJS } from 'immutable';
import * as constants from './contants';

const defaultState = fromJS({
  title: '',
  content: ''
})

// store会将旧的数据和action一起交给reducer来进行数据的更改，然后返回新的数据给store做render
const func = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}

export default func