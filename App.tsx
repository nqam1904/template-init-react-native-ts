import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import MainStack from './src/navigation'
import Config from 'react-native-config'
const { ENVIRONMENT } = Config
console.log('ENVIRONMENT', ENVIRONMENT)
const App: React.FC = () => {
	return (
		<Provider store={store}>
			<MainStack />
		</Provider>
	)
}

export default App
