import {View,Text,StyleSheet,Button} from 'react-native'

const CategoryDetail = (props) => {
    return(
        <View style={styles.screen}>
            <Text>Halaman Kategori Detail</Text>
            <View  style={styles.button}>
                <Button
                title="Back"
                onPress={() => props.navigation.pop()}
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

export default CategoryDetail;