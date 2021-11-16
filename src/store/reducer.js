// 将一整个大的reduce切分成很多个小的reducer，combineReducers用来将所有的reducer拼接在一起
// 这样reducer查找的速度会更快
// header的reducer被放在了header下面store下面的index文件里面，因此引入可以直接用../common/header/store
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'
import { combineReducers } from 'redux-immutable'

// 拼接各个file的reducer
const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
	detail: detailReducer,
	login: loginReducer
})

export default reducer;