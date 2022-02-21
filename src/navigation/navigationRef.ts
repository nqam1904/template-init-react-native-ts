import { StackActions } from '@react-navigation/native'
import React from 'react'

export const navigationRef: any = React.createRef()

export function navigate(name: string, params?: any) {
	navigationRef.current?.navigate(name, params)
}

export function goBack() {
	navigationRef.current?.goBack()
}

export function replace(name: string, params?: any) {
	navigationRef.current?.dispatch(StackActions.replace(name, params))
}

export function navigateReset(name: string) {
	navigationRef.current?.reset({
		routes: [{ name: name }],
	})
}
export function naviPop(number: number) {
	navigationRef.current.dispatch(StackActions.pop(number))
}
