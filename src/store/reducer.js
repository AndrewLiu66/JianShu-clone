import { reducer as headerReducer } from '../common/header/store'
import { combineReducers } from 'redux'

// 拼接各个file的reducer
const reducer = combineReducers({
	header: headerReducer
})

export default reducer;