
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Provider, connect} from 'react-redux';
import store from './store';
import TabNavigation from './TabNavigation'
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
     <Provider store={store}>
       <TabNavigation />
     </Provider>

    )
  }
}





