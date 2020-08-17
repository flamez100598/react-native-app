import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import axios from 'axios';
import { connect } from 'react-redux';
import CONSTANT from '../constant/contant';
class Catagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    let { catagoryTitle, catagoryId } = this.props.route.params;
    // alert(catagoryId);
    this.getMoviesFromApiAsync(catagoryId);
  }
  getMoviesFromApiAsync = async (id) => {
    await axios.get(`${CONSTANT.URL}/products?catagory=${id}`).then(res => {
      this.setState({
        products: res.data
      })
    }).catch(err => {
      console.error(err);
    })
  };
  render() {
    const { products } = this.state;
    return (
      <FlatList data={products}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={style.wrapRow}>
            <ProductListItem product={item}
              keyExtractor={item => `${item.id}`}
              contentContainerStyle={{ paddingRight: 16, paddingLeft: 16 }}
            />
          </View>}
      />
    )
  }
}

export default Catagory;
const style = StyleSheet.create({
  wrapRow: {
    flex: 1,
    paddingHorizontal: 8
  }
})