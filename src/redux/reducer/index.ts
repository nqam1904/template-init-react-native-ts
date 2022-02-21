import { combineReducers } from '@reduxjs/toolkit'
import { authenReducer } from './authen/authenReducer'

const rootReducer = combineReducers({
	authen: authenReducer,
})
export { rootReducer }
