import { FlatList, StatusBar, StyleSheet, View } from "react-native"
import { Restaurants } from "../api/Restaurants"
import RestaurantCard from "../components/RestaurantCard"
import { useEffect, useState } from "react"

const RestaurantScreen = ({ navigation }) => {

    const [restaurants, setRestaurants] = useState(null)

    useEffect(() => {
        Restaurants().then(result => {
            console.log(result.data.message)
            setRestaurants(result.data.restaurants)
        })
    }, [])

    const renderItem = ({ item }) => {
        return <RestaurantCard name={item.name}
            city={item.city}
            pictureId={item.pictureId}
            navigation={navigation}
            >
            
            </RestaurantCard>
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <FlatList
                    data={restaurants}
                    renderItem={renderItem}
                />
                <StatusBar style="auto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    wrapper: {
        paddingTop: 58,
        width: '85%',
    },
});

export default RestaurantScreen;