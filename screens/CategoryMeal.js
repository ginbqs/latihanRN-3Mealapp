import {useEffect, useState} from 'react'
import {View,Text,StyleSheet, Platform, FlatList} from 'react-native'
import MealItem from '../components/MealItem'
import Color from '../constant/Color'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMeal = ({route,navigation}) => {
    const {categoryId,otherParam} = route.params
    const [selected,setSelected] = useState({})

    const renderMealItem = itemData => {
        return <MealItem {...itemData.item} 
            onSelectMeal = {() => {
                navigation.navigate('MealDetail',{
                    mealId:itemData.item.id
                })
            }}
        />
    }

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >=0)

    useEffect(() => {
        const selectedCategory = CATEGORIES.find(val => val.id === categoryId)
        navigation.setOptions({
          title: selectedCategory.title,
          headerStyle:{
              backgroundColor:Platform.OS==='android' ? selectedCategory.color : ''
          },
          headerTintColor:Platform.OS=='android' ? 'white' : selectedCategory.color
        });
      }, [navigation]);
    return(
        <View style={styles.screen}>
            <Text>The Detail Meal {selected?.title}</Text>
            <FlatList data={displayMeals} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        // flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    }
})

export default CategoryMeal;
