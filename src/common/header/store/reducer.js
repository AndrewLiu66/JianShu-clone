import * as constants from './constants'
// 将state 变为一个immutable对象后不能直接修改其数据，必须要通过其方法才能进行修改
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  // fromJS里面的数组会自动将[]变成一个immutable的数组
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

// store会将旧的数据和action一起交给reducer来进行数据的更改，然后返回新的数据给store做render
const func = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      // merge的作用跟set的作用是一样的，但是可以在里面写入多个数据的更改
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state
  }
}

export default func