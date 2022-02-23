import React from 'react'
import { View, Text, Button, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import { navigationRef } from 'navigationRef'

function HomeScreen(props: any) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text>Home Screen</Text>
			<Button title="Go" onPress={() => props.navigation.navigate('Home1')} />
		</View>
	)
}
function HomeScreen1() {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text>Home Screen 1</Text>
		</View>
	)
}
export const screenOptionsNativeStack: any = {
	headerShown: false,
	customAnimationOnGesture: true,
	fullScreenGestureEnabled: true,
	gestureEnabled: true,
	animationTypeForReplace: 'push',
	animation: 'slide_from_right',
	presentation: Platform.OS === 'android' ? 'modal' : '',
}

export const screenOptionsStack: any = {
	headerShown: false,
	presentation: 'modal',
	gestureEnabled: true,
	...TransitionPresets.SlideFromRightIOS,
}

const MainStack: React.FC = () => {
	const Stack = createNativeStackNavigator()
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator screenOptions={screenOptionsNativeStack}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Home1" component={HomeScreen1} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default MainStack
