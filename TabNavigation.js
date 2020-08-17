
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';
import { Ionicons } from '@expo/vector-icons';
import StackNavigation from './StackNavigation';
import { connect } from 'react-redux';
import axios from 'axios';
import CONSTANT from './constant/contant';
// import ORDERSDB from './DBcontext/ordersDB';
const Tab = createBottomTabNavigator();
let ordersDB;
class TabNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersItems: []
        }
    }
    componentWillMount() {
        const orders = async () => {
            let ordersItems = [];
         await axios.get(`${CONSTANT.URL}/orders`).then(res =>{
                ordersItems = res.data;
                this.setState({ordersItems})
                // console.log(ordersItems);
            }).catch(err => {
                console.log(err);
            })
            return ordersItems;
        }
        orders();
    }
    componentDidUpdate(prevProps, prevState) {
        this.props.fetchDataOrder(this.state.ordersItems);
    }
    render() {
        let { cartItems, orderItems } = this.props;
        // console.log(this.state.ordersItems)
        let cartSize = 0;
        if (cartItems.length != 0) {
            cartItems.map(x => {
                let quantity = x.quantity === undefined ? '' : x.quantity;
                if (quantity !== undefined) {
                    cartSize += x.quantity
                }
            });
        }
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === 'Home') {
                                return (
                                    <Ionicons
                                        name={
                                            focused
                                                ? 'ios-information-circle'
                                                : 'ios-information-circle-outline'
                                        }
                                        size={size}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Settings') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-list-box' : 'ios-list'}
                                        size={size}
                                        color={color}
                                    />
                                );
                            } else if (route.name === 'Cart') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-cart' : 'ios-cart'}
                                        size={size}
                                        color={color} />
                                )
                            } else if (route.name === 'Orders') {
                                return (
                                    <Ionicons
                                        name={focused ? 'ios-barcode' : 'ios-barcode'}
                                        size={size}
                                        color={color} />
                                )
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                    }}>
                    <Tab.Screen name="Home" component={StackNavigation} />
                    <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: cartSize }} />
                    <Tab.Screen name="Orders" component={Orders} options={{ tabBarBadge: orderItems.length }} />
                    <Tab.Screen name="Settings" component={Settings} />
                </Tab.Navigator>
            </NavigationContainer>

        )
    }
}
const mapStateToProps = (state) => {
    const { cartItems, orderItems } = state;
    return {
        cartItems: cartItems,
        orderItems: orderItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataOrder : (data) => dispatch({
            type : 'FETCH_DATA_ORDERS',
            payload: data
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabNavigation)





