import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from "../App"

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerTintColor: 'blue'
    })
  }
})

const AppContainer = createAppContainer(HomeStack)

export default AppContainer