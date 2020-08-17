import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CatagoryList from '../components/CatagoryListItem';
import axios from 'axios';
import CONSTANT from '../constant/contant';
export default class Catagories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: [
      ]
    }
  }
  componentDidMount() {
    
   this.getCatagories();
  }
  getCatagories = async () => {
    await axios.get(`${CONSTANT.URL}/catagories`).then(res => {
      this.setState({
        catagories: res.data
      })
    }).catch(err => {
      console.error(err);
    })
  }
  render() {
    const { navigation } = this.props;
    const { catagories } = this.state;
    return (
      
        <View style={styles.container}>
          <FlatList 
            data={catagories}
            renderItem={( { item } ) => 
            <CatagoryList catagory={item} 
                          onPress={() => {navigation.navigate('Catagory',{catagoryName: item.title, catagoryId: item.id})}} /> }
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
