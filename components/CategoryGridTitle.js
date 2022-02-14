import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const CategoryGridTitle = props => {
    return(
            <TouchableOpacity 
                style={{...styles.listItem,backgroundColor:props.color}}
                onPress={props.onSelect}
            > 
                <View style={styles.container} >
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        flex:1,
        height:130,
        marginVertical:12,
        marginHorizontal:10,
        borderRadius:10,
       },
    container:{
        flex:1,
        padding:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        shadowColor:'red',
        shadowOffset:{width:0,height:2},
        elevation:3
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    }
})

export default CategoryGridTitle;