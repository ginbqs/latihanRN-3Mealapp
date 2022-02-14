import {View,Text, TouchableOpacity,StyleSheet,Image, ImageBackground} from 'react-native'
const MealItem = props => {
    const {title,imageUrl} = props
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={styles.containerImage}>
                        <ImageBackground source={{uri:props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.containerTitle}>
                                <Text style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.containerDetail}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                    <View></View>
                </View>
            </TouchableOpacity>
        </View>        
    )
}

const styles = StyleSheet.create({
    container:{
        height:200,
        width:'100%',
    } ,
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    containerTitle:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding:10,
        width:'100%',
        alignItems:'center'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    },
    containerImage:{
        height:'80%',
        backgroundColor:'blue'
    },
    containerDetail:{
        height:'20%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
})

export default MealItem;