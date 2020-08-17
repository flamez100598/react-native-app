import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import CONSTANT from '../constant/contant'
 class ProductListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    formatPrice = (price) => (
        price + "VND"
    );
    render() {
        const { product } = this.props;
        return (
            <View style={style.container}>
                <Image style={style.img} source={{uri: product.img[0].url}} />
                <View>
                    <Text style={style.name}>{product.name}</Text>
                </View>
                <View style={style.wrappRow}>
                    <Text style={style.price}>{this.formatPrice(product.price)}</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.addItemToCart(product)}>
                       <Text> MUA + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      addItemToCart: (product) => dispatch(
        {
          type: CONSTANT.TYPE.ADD_TO_CART,
          payload: product
        })
  
    }
  }
export default connect(null, mapDispatchToProps)(ProductListItem);
const style = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius:4,
        backgroundColor:'#fff',
        overflow: 'hidden'
    },
    wrappRow : {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img : {
        height: 150,
        flex:1
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    price: {
        fontSize:16, 
        opacity:0.8,
        flex: 1
    }
})