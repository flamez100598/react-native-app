<script src="http://192.168.5.120:8097"></script>
import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';
import Soccer from '../assets/soccer.png';
export default class CatagoryList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.containerList} >
              <Text style={styles.title}>{this.props.title}</Text>
              <Image source={Soccer} style={styles.catagoryItem} />
            </View>
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