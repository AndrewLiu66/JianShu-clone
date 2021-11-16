// 将state 变为一个immutable对象后不能直接修改其数据，必须要通过其方法才能进行修改
import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  })
}
// store会将旧的数据和action一起交给reducer来进行数据的更改，然后返回新的数据给store做render
const func = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}

export default func