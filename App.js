import React, { Component } from 'react';
import {
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import { white, accentRed, lightGray, gray } from './utils/colors'
import { Constants } from 'expo'
import DeckList from './components/DeckList'
import CreateNewDeck from './components/CreateNewDeck'
import DeckView from './components/DeckView'


function CustomStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight, marginBottom: 4 }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}


const tabRouteConfig = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='dashboard' size={24} color={tintColor} />
    },
  },
  CreateNewDeck: {
    screen: CreateNewDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={24} color={tintColor} />
    }
  }
}

const tabNavigatorConfig = {
  navigationOptions : {
    header: null,
  },
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 10,
    },
    indicatorStyle:{
      height: 1,
      backgroundColor: accentRed,
    },
    activeTintColor: accentRed,
    inactiveTintColor: gray,
    style: {
      height: 55,
      backgroundColor:  white,
      elevation: 5,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    }
  }
}

const Tabs = createMaterialTopTabNavigator(tabRouteConfig,tabNavigatorConfig)

const stackRouteConfig = {
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },

  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Title',
      headerTintColor: accentRed,
      headerStyle: {
        backgroundColor: white,
      },
    },
  },
}

const MainNavigator = createStackNavigator(stackRouteConfig)

export default class App extends Component {
  render() {
    return (
      <View style = {{ flex:1,backgroundColor: lightGray }}>
        <CustomStatusBar backgroundColor = { accentRed } barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}