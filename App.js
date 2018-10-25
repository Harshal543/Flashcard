import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  // createStackNavigator
} from 'react-navigation'
import { white, orange } from './utils/colors'
import { Constants } from 'expo'
import DeckList from './components/DeckList'
import CreateNewDeck from './components/CreateNewDeck'


function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const tabRouteConfig = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      // tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  CreateNewDeck: {
    screen: CreateNewDeck,
    navigationOptions: {
      tabBarLabel: 'Create New Deck'
    }
  }
}

const tabNavigatorConfig = {
  navigationOptions : {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? orange : white,
    style: {
      height: 50,
      backgroundColor: Platform.OS === 'ios' ? white : orange,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
}

const Tabs = Platform.OS === 'ios' ?
  createBottomTabNavigator(tabRouteConfig,tabNavigatorConfig)
  : createMaterialTopTabNavigator(tabRouteConfig,tabNavigatorConfig)


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor: '#ddd'}}>
        <CustomStatusBar backgroundColor={orange} barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}