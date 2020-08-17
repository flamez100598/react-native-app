import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import CONSTANT from '../constant/contant';
import axios from 'axios';
const mapStateToProps = (state) => {
    const {cartItems} = state
    return {
        cartItems: cartItems
    }
}
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    makeId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    bookToOrders = async (cart, cb) => {

        let totalPrice = 0;
        let products = [];
        cart.map(x => {
            totalPrice += x.price;
            products.push({
                "id" : x.id,
                "quantity": x.quantity
            })
        })
        let cartParams = {
            "id" : this.makeId(5),
            "dateCreate": Date.now(),
            "totalPrice": totalPrice,
            "products": products
        }
        await axios({
            method: 'post',
            url:`${CONSTANT.URL}/orders`, 
            data: cartParams
            }).then(res => {
                alert(res.status);
                cb();
        });
    }
    render() {
        const { cartItems } = this.props;
        const bookNow = <TouchableOpacity onPress={() => this.bookToOrders(cartItems, this.props.emptyCart)}>
        <View><Text>Book now !</Text></View></TouchableOpacity>;
        return (
            <View>
            <FlatList data={cartItems}
                renderItem={({ item }) =>
                    <View style={styles.containerList} >
                        <View style={styles.wrapperRow}>
                        <Text style={styles.title}>
                        {item.name}
                        </Text>
                        <Image style={styles.img} source={{uri: item.img[0].url}} />
                        </View>
                        <View><Text>{item.price}</Text></View>   
                        <View><Text>{item.quantity}</Text></View> 
                        <TouchableOpacity onPress={() => this.props.removeFromCart(item)}><Text>Remove</Text></TouchableOpacity>
                       
                    </View>
                 
                } />
               {cartItems.length > 0 ? bookNow : <Text>Nothing in cart!</Text>}
                
                </View>
        )

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(
        {
          type: CONSTANT.TYPE.REMOVE_FROM_CART,
          payload: product
        }),
        emptyCart: () => dispatch({
            type: CONSTANT.TYPE.EMPTY_CART
        })
  
    }
  }
const styles = StyleSheet.create({
    containerList: {
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        marginBottom: 16,
  
    },
    wrapperRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img : {
        height: 150,
        flex: 1
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold',
        flex: 1
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Cart);