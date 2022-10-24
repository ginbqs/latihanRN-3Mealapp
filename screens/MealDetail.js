import {useLayoutEffect} from 'react'
import {View,Text,StyleSheet, Button, Alert,ScrollView,Image} from 'react-native'
import Color from '../constant/Color'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text  style={{color:'white'}}>{props.children}</Text>
      </View>
    );
  };

const MealDetail = props => {
    const {mealId} = props.route.params
    const headerPressButtonHanlder = () => {
      console.log('press')
    }
    useLayoutEffect(() => {
        const selectMeal = MEALS.find(meal => meal.id === mealId)
        props.navigation.setOptions({
            title: selectMeal.title,
            headerRight: () => {
              return <IconButton  onPress={headerPressButtonHanlder}/>
            }

        });
    }, [props.navigation]);
      const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <ScrollView>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text style={{color:'white'}}>{selectedMeal.duration}m</Text>
          <Text style={{color:'white'}}>{selectedMeal.complexity.toUpperCase()}</Text>
          <Text style={{color:'white'}}>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200
    },
    details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
    },
    title: {
      fontSize: 22,
      textAlign: 'center',
      color: 'white'
    },
    listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
    }
  });
  
export default MealDetail;
