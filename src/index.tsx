import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainStack from './navigation'
import Config from 'react-native-config'
const { APP_ENV } = Config
console.log('ENVIRONMENT', APP_ENV)
const App: React.FC = () => {
	return (
		<Provider store={store}>
			<MainStack />
		</Provider>
	)
}

export default App
