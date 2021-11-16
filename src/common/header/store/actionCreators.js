import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

// 由于reducer储存的list是immutable对象，因此如果要更新它的数据，新数据也必须是immutable对象,
// 所以这里引入fromJS更改fetch来的数据类型为immutable
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})
export const getList = () => {
  return (dispatch) => {
    // react will find this path under src first, and then look for the public folder
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}