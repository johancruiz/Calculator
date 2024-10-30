import { StatusBar, Text, View } from 'react-native'
import { globalStyles } from './config/theme/app-theme'
import CalculatorScreen from './presentation/screens/CalculatorScreen'


const App = () => {
  return (
    <View style={ globalStyles.background } >
      <StatusBar
        barStyle={ 'light-content' }
        backgroundColor={'black'}
      />
      <CalculatorScreen />

    </View>
  )
}

export default App
