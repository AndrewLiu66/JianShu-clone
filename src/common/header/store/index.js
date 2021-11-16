// 引入专门针对header这个组件的reducer
// 同时把reducer，actionCreator和constant引入然后再全部导出
// 这样别的文件引入这三个其中一个的时候，路径就只需要/store就可以了
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as constants from './constants'

export { reducer, actionCreators, constants }