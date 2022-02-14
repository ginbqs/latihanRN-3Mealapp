import {View,Text,StyleSheet,Button} from 'react-native'

const Category = ({navigation}) => {
    return(
        <View style={styles.screen}>
            <Text>Halaman Kategori</Text>
            <View style={styles.button}>
                <Button
                    title="Go to Details by navigate"
                    onPress={() => navigation.navigate('CategoryDetail')}
                />
            </View>
            <View  style={styles.button}>
                <Button
                title="Go to Details... again with by Push"
                onPress={() => navigation.push('CategoryDetail')}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        marginVertical:10
    }
})

export default Category;