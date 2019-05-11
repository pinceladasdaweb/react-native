import { createAppContainer, createStackNavigator } from 'react-navigation'

import PeoplePage from './screens/PeoplePage'
import PeopleDetailPage from './screens/PeopleDetailPage'

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = navigation.state.params.people.name.first
      return ({
        title: peopleName
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
      fontSize: 25,
      textTransform: 'capitalize'
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
