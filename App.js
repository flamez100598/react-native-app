import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CatagoryList from './components/CatagoryList';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: [
        {id: 1, title: 'Soccer play!'},
        {id: 2, title: 'Volleyball play!'},
        {id: 3, title: 'tennis play!'},
        {id: 4, title: 'Basketball play!'},
        {id: 5, title: 'Match play!'}
      ]
    }
  }
  render() {
    const { catagories } = this.state;
    return (
      <View style={styles.container}>
          <FlatList 
            data={catagories}
            renderItem={( { item } ) => <CatagoryList catagory={item} /> }
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{paddingRight:16, paddingLeft: 16}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
