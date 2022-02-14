import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle'

import {CATEGORIES} from '../data/dummy-data'



const Category = (props) => {
    const rederList = (item) => {
        return <CategoryGridTitle title={item.item.title} color={item.item.color} id={item.item.id} onSelect={()=> {
            props.navigation.navigate('CategoryMeal',{
                categoryId:item.item.id,
                otherParam: 'anything you want here',
            })
        }}  />
    }
    return(
        <View >
            <FlatList data={CATEGORIES} numColumns={2} renderItem={rederList} keyExtractor={(item,index) => item.id} />
        </View>
    )
}

Category.navigationOptions = {
    headerTitle:'cek'
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        // flex:1,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        height:100
    }
})

export default Category;