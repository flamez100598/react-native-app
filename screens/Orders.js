import React, {Component} from 'react';
import {connect} from 'react-redux'
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import Moment from 'moment';
class Orders extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { orderItems } = this.props;
        console.log(orderItems);
        const displayOrder = (arr) => (
            arr.map((item,idx) => (<View id={idx}>
                <Text>Product Id : {item.id} Quantity : {item.quantity}</Text>
            </View>))
        )
        displayOrder;
        return (
            <View>
            <FlatList data={orderItems}
                renderItem={({ item }) =>
                    <View style={styles.containerList} >
                        <Text>Total price: {item.totalPrice}</Text>
                        <Text>Create date: {Moment(item.dateCreate).format('dddd MMMM YYYY')}</Text>   
                        {/* <Text>{item.products[0].id}</Text> */}
                       {displayOrder(item.products)}
                    </View>
                   
                 
                } />
                
                </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        orderItems: state.orderItems
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
  
    }
})
export default connect(mapStateToProps)(Orders);