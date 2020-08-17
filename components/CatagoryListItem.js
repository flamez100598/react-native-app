
import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import Soccer from '../assets/soccer.png';
export default class CatagoryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { catagory, onPress} = this.props;
        return (
            <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={onPress}>
                <View style={styles.containerList} >
                    <Text style={styles.title}>
                        {catagory.title}
                    </Text>
                    <Image 
                    source={Soccer} 
                    style={styles.catagoryItem} />
                </View>
            </TouchableOpacity>
            
          );
    }
  
}

const styles = StyleSheet.create({
    containerList: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        marginBottom:16
    },
    catagoryItem: {
        width: 64,
        height:64
    },
    
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold'
    }
})