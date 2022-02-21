import { AnyAction } from '@reduxjs/toolkit'
export interface AuthenState {
	user?: {
		id: string
		name: string
	}
}
const initialState: AuthenState = {}

export const authenReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		default:
			return state
	}
}
