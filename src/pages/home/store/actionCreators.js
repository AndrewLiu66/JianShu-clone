import axios from 'axios'
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  // 将普通list转化为一个immutable数组
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      // 不仅仅是最大的reducer能接收到，所有小的reducer也能够接收到
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
}
export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})